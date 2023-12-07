/**********************************************************************
 * Copyright (C) 2023 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import { beforeEach, expect, test, vi } from 'vitest';
import { process } from '@podman-desktop/api';
import { PodmanCleanupWindows } from './podman-cleanup-windows';

let podmanCleanupWindows: PodmanCleanupWindows;

// mock the API
vi.mock('@podman-desktop/api', async () => {
  return {
    process: {
      exec: vi.fn(),
    },
  };
});

// mock exists sync
vi.mock('node:fs', async () => {
  return {
    existsSync: vi.fn(),
    promises: {
      readFile: vi.fn(),
      rm: vi.fn(),
    },
  };
});

// mock ps-list
vi.mock('ps-list', async () => {
  return {
    default: vi.fn(),
  };
});

beforeEach(() => {
  podmanCleanupWindows = new PodmanCleanupWindows();
  vi.resetAllMocks();
});

test('check stopPodmanProcesses', async () => {
  // mock process.exec
  vi.mocked(process.exec).mockResolvedValue({ stdout: 'my-machine1\nmy-machine2', command: 'wsl', stderr: '' });

  await podmanCleanupWindows.stopPodmanProcesses();

  expect(process.exec).toBeCalledWith('wsl', ['--list', '--running', '--quiet']);

  expect(process.exec).toBeCalledWith('wsl', ['--terminate', 'my-machine1']);
  expect(process.exec).toBeCalledWith('wsl', ['--terminate', 'my-machine2']);
});

test('check stopPodmanProcesses with error', async () => {
  // mock process.exec
  vi.mocked(process.exec).mockRejectedValue(new Error('dummy error'));

  await podmanCleanupWindows.stopPodmanProcesses();

  expect(process.exec).toBeCalledWith('wsl', ['--list', '--running', '--quiet']);

  // only one call, no call to terminate
  expect(vi.mocked(process.exec).call.length).toBe(1);
});

test('check getContainersConfPath', async () => {
  const containersPath = podmanCleanupWindows.getContainersConfPath();

  expect(containersPath).includes('containers.conf');
});

test('check folders to delete', async () => {
  const folders = podmanCleanupWindows.getFoldersToDelete();

  expect(folders).lengthOf(3);
});
