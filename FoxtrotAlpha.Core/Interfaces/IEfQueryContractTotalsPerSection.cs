using FoxtrotAlpha.Core.ViewModels;
using System.Collections.Generic;

namespace FoxtrotAlpha.Core.Interfaces
{
    public interface IEfQueryContractTotalsPerSection
    {
        IEnumerable<GraphViewModel> QueryContractTotalsPerSection();
    }
}