using AutoClutch.Auto.Service.Interfaces;
using FoxtrotAlpha.Core.Interfaces;
using FoxtrotAlpha.Core.Models;
using FoxtrotAlpha.Core.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoxtrotAlpha.Core.Services
{
    class MetricService : IMetricService
    {
        private IEfQueryContractTotalsPerSection _efQueryContractTotalsPerSection;

        private IService<user> _engineerService;

        public MetricService(IEfQueryContractTotalsPerSection efQueryContractTotalsPerSection, IService<user> engineerService)
        {
            _efQueryContractTotalsPerSection = efQueryContractTotalsPerSection;

            _engineerService = engineerService;
        }

        public IEnumerable<ViewModels.GraphViewModel> QueryContractTotalsPerSection()
        {
            var result = _efQueryContractTotalsPerSection.QueryContractTotalsPerSection();

            return result;
        }

    }
}
