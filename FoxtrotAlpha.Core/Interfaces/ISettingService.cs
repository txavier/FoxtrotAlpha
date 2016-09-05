using AutoClutch.Auto.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoxtrotAlpha.Core.Interfaces
{
    public interface ISettingService : IService<FoxtrotAlpha.Core.Models.setting>
    {
        string GetSettingValueBySettingKey(string settingKey);

        System.Collections.Generic.IEnumerable<FoxtrotAlpha.Core.Models.setting> Search(FoxtrotAlpha.Core.Objects.SearchCriteria searchCriteria, bool lazyLoadingEnabled = true, bool proxyCreationEnabled = true);

        int SearchCount(FoxtrotAlpha.Core.Objects.SearchCriteria searchCriteria);
    }
}
