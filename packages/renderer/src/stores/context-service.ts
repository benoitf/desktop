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

import type { Writable } from 'svelte/store';
import { writable } from 'svelte/store';
import type { ContextKeyInfo} from '../lib/contextkey/contextkey';
import { RawContextKey } from '../lib/contextkey/contextkey';
import type { IContextKeyService } from '/@/lib/contextkey/contextKeyService';
import { ContextKeyService } from '/@/lib/contextkey/contextKeyService';

// sets the context key service
export const contextKeyService: Writable<IContextKeyService> = writable();
const contextKeyServiceInstance = new ContextKeyService();

// perform the initialization
export const SET_CONTEXT_COMMAND_ID = 'setContext';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function setContext(contextKey: unknown, contextValue: any) {
	contextKeyServiceInstance.createKey(String(contextKey), contextValue);
}

// register the commands
window.registerCommand(SET_CONTEXT_COMMAND_ID, setContext);

window.registerCommand('getContextKeyInfo', () => {
		return [...RawContextKey.all()].sort((a, b) => a.key.localeCompare(b.key));
}
	);

window.registerCommand('_generateContextKeyInfo', ()  => {
	const result: ContextKeyInfo[] = [];
	const seen = new Set<string>();
	for (const info of RawContextKey.all()) {
		if (!seen.has(info.key)) {
			seen.add(info.key);
			result.push(info);
		}
	}
	result.sort((a, b) => a.key.localeCompare(b.key));
	console.log(JSON.stringify(result, undefined, 2));
});



contextKeyService.set(contextKeyServiceInstance);

