using AutoClutch.Auto.Repo.Interfaces;
using AutoClutch.Auto.Repo.Objects;
using AutoClutch.Auto.Service.Services;
using StructureMap.Configuration.DSL;
using StructureMap;
using StructureMap.Graph;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using FoxtrotAlpha.Data;
using FoxtrotAlpha.Core.Services;
using FoxtrotAlpha.Core.Interfaces;
using FoxtrotAlpha.Infrastructure.Getters;
using AutoClutch.Auto.Core.Interfaces;
using Auto.Service.Services;

namespace FoxtrotAlpha.CompositionRoot
{
    public class DefaultRegistry : Registry
    {
        public DefaultRegistry()
        {
            Scan(scan =>
            {
                scan.TheCallingAssembly();
                scan.AssembliesFromApplicationBaseDirectory();
                scan.WithDefaultConventions();
            });

            For<DbContext>().Use<EfDataDbContext>();

            For(typeof(IService<>)).Use(typeof(Service<>));

            For(typeof(IRepository<>)).Use(typeof(Repository<>));

            For<IEnvironmentConfigSettingsGetter>().Use<EnvironmentConfigSettingsGetter>();

            For(typeof(ILogService<>)).Use(typeof(UserActionLogService<>));
        }
    }
}
