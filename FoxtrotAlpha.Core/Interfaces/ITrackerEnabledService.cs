﻿using FoxtrotAlpha.Core.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoxtrotAlpha.Core.Interfaces
{
    public interface ITrackerEnabledService
    {
        IEnumerable<BaseHistoryVM> GetAll();

        IEnumerable<BaseHistoryVM> Get(string typeFullName, int id);

        int GetCountAll();

        IEnumerable<BaseHistoryVM> Get(int? page, int? perPage);
    }
}
