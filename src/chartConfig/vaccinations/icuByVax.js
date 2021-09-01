import vaccineCharts from './vaccineChartIDs';
import { Fragment } from 'react';

const footnote = <Fragment>
* This data is population adjusted.<br/>
* Population denominators are calculated based on daily dose history.<br/>
* <b>Fully vaccinated</b> = 14 days after 2nd dose<br/>
* <b>Partially vaccinated</b> = 14 days after 1st dose and &lt;14 days after 2nd dose.
</Fragment>;

const icuByVax = {
  id: vaccineCharts.icuByVax,
  dataKeyX: 'date',
  title: 'ICU occupancy by vaccination status (per million)',
  leftYAxisLabel: 'ICU occupancy per million',
  rightYAxisLabel: '2 dose effectiveness',
  xAxisScale: 'band',
  roundUpYAxisMax: true,
  footnote: footnote,
  rightValueSuffix: '%',
  areas: [
    {
      dataKey: 'icu_full_vax_per_mil',
      name: 'Fully Vaccinated',
      stroke: '#82ca9d',
      fill: '#82ca9d',
      strokeWidth: 2,
      stackId: 1,
      type:'monotone'
    },
    {
      dataKey: 'icu_partial_vax_per_mil',
      name: 'Partially Vaccinated',
      stroke: '#f5b042',
      fill: '#f5b042',
      strokeWidth: 2,
      stackId: 1,
      type:'monotone'
    },
    {
      dataKey: 'icu_unvax_per_mil',
      name: 'Not Vaccinated',
      stroke: '#eb4034',
      fill: '#eb4034',
      strokeWidth: 2,
      stackId: 1,
      type:'monotone'
    },
  ],
  lines: [
    {
      dataKey: 'icu_full_effect',
      name: '2 Dose Effectiveness',
      stroke: '#000000',
      strokeWidth: 2,
      type: 'monotone',
      yAxisId: 'right',
    }
  ]
};

export default icuByVax;
