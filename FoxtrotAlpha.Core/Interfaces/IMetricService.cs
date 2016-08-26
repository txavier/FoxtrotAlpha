using System.Collections.Generic;

namespace FoxtrotAlpha.Core.Interfaces
{
    public interface IMetricService
    {
        IEnumerable<ViewModels.GraphViewModel> QueryContractTotalsPerSection();
    }
}