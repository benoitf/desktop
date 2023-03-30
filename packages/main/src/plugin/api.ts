/**********************************************************************
 * Copyright (C) 2022 Red Hat, Inc.
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

import type { ContainerInfo } from './api/container-info';

export interface RemoteAPI {
  // eslint-disable-next-line @typescript-eslint/ban-types
  listContainers(options?: {}): Promise<ContainerInfo[]>;
}

export type ApiSenderType = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  send: (channel: string, data?: any) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  receive: (channel: string, func: any) => void;
};
