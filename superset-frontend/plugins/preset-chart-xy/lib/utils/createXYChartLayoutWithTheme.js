/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import XYChartLayout from './XYChartLayout';
export default function createXYChartLayoutWithTheme(config) {
    const { theme, ...rest } = config;
    return new XYChartLayout({
        ...rest,
        // @ts-ignore
        xTickSize: theme.xTickStyles.length || theme.xTickStyles.tickLength,
        xTickTextStyle: theme.xTickStyles.label.bottom || theme.xTickStyles.label.top,
        // @ts-ignore
        yTickSize: theme.yTickStyles.length || theme.yTickStyles.tickLength,
        yTickTextStyle: theme.yTickStyles.label.left || theme.yTickStyles.label.right,
    });
}
//# sourceMappingURL=createXYChartLayoutWithTheme.js.map