﻿using FoxtrotAlpha.Core.Interfaces;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoxtrotAlpha.Infrastructure.Getters
{
    public class EnvironmentConfigSettingsGetter : IEnvironmentConfigSettingsGetter
    {
        public string GetDocumentManagementSystemFolderName()
        {
            string result = ConfigurationManager.AppSettings.Get("DocumentManagementServiceFolderName");

            return result;
        }
    }
}
