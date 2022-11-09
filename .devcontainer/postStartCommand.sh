#!/bin/bash
#
# Copyright (C) 2022 Red Hat, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#
# SPDX-License-Identifier: Apache-2.0

# Need to start all services
/usr/bin/supervisord -c /etc/supervisord.conf &

# wait X server to be ready or after 2mn exit
timeout 120 bash -c 'until xdpyinfo -display :0 &> /dev/null; do sleep 1; done'

# launch podman desktop
cd dist/linux-unpacked/&& ./podman-desktop &

# launch the website rendering
cd website && yarn start
