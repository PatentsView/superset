/**
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
import { ChartProps, QueryFormData } from '@superset-ui/core';
export default function transformProps(chartProps: ChartProps<QueryFormData>): {
    width: number;
    height: number;
    data: any;
    groupbyRows: any;
    groupbyColumns: any;
    metrics: any;
    tableRenderer: any;
    colOrder: any;
    rowOrder: any;
    aggregateFunction: any;
    transposePivot: any;
    combineMetric: any;
    rowSubtotalPosition: any;
    colSubtotalPosition: any;
    colTotals: any;
    rowTotals: any;
    valueFormat: any;
    emitFilter: any;
    setDataMask: import("@superset-ui/core").SetDataMaskHook;
    selectedFilters: any;
    verboseMap: {
        [key: string]: string;
    };
    columnFormats: {
        [key: string]: string;
    };
    metricsLayout: any;
    metricColorFormatters: import("@superset-ui/chart-controls").ColorFormatters;
    dateFormatters: any;
};
//# sourceMappingURL=transformProps.d.ts.map