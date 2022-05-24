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

import React, { Component } from 'react';
import type { ContainerInfo } from '../../preload/src/api/container-info';

interface State {
  containers: ContainerInfo[];
}

interface Props {
  title: string;
}

export class Containers extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { containers: [] };
  }

  async fetchContainers() {
    const containers = await window.listContainers();
    this.setState({ containers });
  }

  async shouldBeInTheStore() {
    await this.fetchContainers();
    window.events?.receive('container-stopped-event', () => {
      this.fetchContainers();
    });

    window.events?.receive('container-started-event', () => {
      this.fetchContainers();
    });

    window.events?.receive('container-removed-event', () => {
      this.fetchContainers();
    });

    window.events?.receive('provider-change', () => {
      this.fetchContainers();
    });
  }

  async componentDidMount() {
    await this.shouldBeInTheStore();
  }

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <ul>
          {this.state.containers.map(container => (
            <li key={container.Id}>
              {container.Id} {container.Names} with state {container.State}, is using container engine{' '}
              {container.engineName}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
