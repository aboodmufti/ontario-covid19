import vaccineCharts from './vaccineChartIDs';

const icuByVax = {
  id: vaccineCharts.icuByVax,
  dataKeyX: 'date',
  title: 'ICU occupancy by vaccination status (per million)',
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
};

export default icuByVax;