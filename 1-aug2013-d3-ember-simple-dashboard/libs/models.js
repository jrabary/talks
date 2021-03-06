App.Store = DS.Store.extend({
  adapter: DS.FixtureAdapter.create({ latency: 400 })
});

App.Month = DS.Model.extend({
  test: DS.attr('number'),
  companies: DS.hasMany('App.Company')
});

App.Company = DS.Model.extend({
  month: DS.belongsTo('App.Month'),
  name: DS.attr('string'),
  newContracts: DS.attr('number'),
  feeIncreases: DS.attr('number'),
  attritions: DS.attr('number'),
});


// Test data
App.TestData = Ember.Object.extend({
  init: function() {
    var months = [],
        companies = [];

    for (var year = 1990; year <= 2014; year++) {
      for (var month = 0; month < 12; month++) {
        months.push({
          id: moment([year, month]).format('MMM-YYYY'),
          companies: [year+''+month+'1', year+''+month+'2', year+''+month+'3', year+''+month+'4', year+''+month+'5']
        });

        // debugger;
        companies.push({
          id: year+''+month+'1',
          name: 'Acme Inc',
          newContracts: Math.floor(Math.random()*1000),
          feeIncreases: Math.floor(Math.random()*1000),
          attritions: Math.floor(Math.random()*1000),
        });
        companies.push({
          id: year+''+month+'2',
          name: 'LexCorp',
          newContracts: Math.floor(Math.random()*1000),
          feeIncreases: Math.floor(Math.random()*1000),
          attritions: Math.floor(Math.random()*1000),
        });
        companies.push({
          id: year+''+month+'3',
          name: 'Stark Industries',
          newContracts: Math.floor(Math.random()*1000),
          feeIncreases: Math.floor(Math.random()*1000),
          attritions: Math.floor(Math.random()*1000),
        });
        companies.push({
          id: year+''+month+'4',
          name: 'Wayne Enterprises',
          newContracts: Math.floor(Math.random()*1000),
          feeIncreases: Math.floor(Math.random()*1000),
          attritions: Math.floor(Math.random()*1000),
        });
        companies.push({
          id: year+''+month+'5',
          name: 'Dunder Mifflin',
          newContracts: Math.floor(Math.random()*1000),
          feeIncreases: Math.floor(Math.random()*1000),
          attritions: Math.floor(Math.random()*1000),
        });
      }
    }

    this.set('months', months);
    this.set('companies', companies);
    return this._super();
  },
  months: [],
  companies: []
});

App.data = new App.TestData();

App.Month.FIXTURES = App.data.get('months');
App.Company.FIXTURES = App.data.get('companies');