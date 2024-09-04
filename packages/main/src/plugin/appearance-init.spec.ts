/**********************************************************************
 * Copyright (C) 2024 Red Hat, Inc.
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

import { expect, test, vi } from 'vitest';

import { AppearanceInit } from './appearance-init.js';
import type { ConfigurationRegistry } from './configuration-registry.js';

let appearanceInit: AppearanceInit;

const registerConfigurationsMock = vi.fn();

const configurationRegistryMock = {
  registerConfigurations: registerConfigurationsMock,
} as unknown as ConfigurationRegistry;

test('should register a configuration', async () => {
  appearanceInit = new AppearanceInit(configurationRegistryMock);

  appearanceInit.init();

  expect(configurationRegistryMock.registerConfigurations).toBeCalled();

  const configurationNode = vi.mocked(configurationRegistryMock.registerConfigurations).mock.calls[0]?.[0][0];
  expect(configurationNode?.id).toBe('preferences.appearance');
  expect(configurationNode?.title).toBe('Appearance');
  expect(configurationNode?.properties).toBeDefined();
  expect(Object.keys(configurationNode?.properties ?? {}).length).toBe(2);
  expect(configurationNode?.properties?.['preferences.zoomLevel']).toBeDefined();
  expect(configurationNode?.properties?.['preferences.zoomLevel']?.markdownDescription).toBeDefined();
  expect(configurationNode?.properties?.['preferences.zoomLevel']?.type).toBe('number');
  expect(configurationNode?.properties?.['preferences.zoomLevel']?.default).toBe(0);
  expect(configurationNode?.properties?.['preferences.zoomLevel']?.step).toBe(0.1);
});
