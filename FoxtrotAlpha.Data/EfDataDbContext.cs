namespace FoxtrotAlpha.Data
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;
    using Core.Models;
    using TrackerEnabledDbContext.Common.Extensions;
    using Microsoft.AspNet.Identity;
    using Microsoft.AspNet.Identity.EntityFramework;

    public partial class EfDataDbContext : TrackerEnabledDbContext.Identity.TrackerIdentityContext<IdentityUser>
    {
        public EfDataDbContext()
            : base("name=DefaultConnection")
        {
        }

        public virtual DbSet<user> users { get; set; }

        public virtual DbSet<userActionLog> userActionLogs { get; set; }

        public virtual DbSet<setting> settings { get; set; }

        public virtual DbSet<actionFigure> actionFigures { get; set; }

        public virtual DbSet<make> makes { get; set; }


        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            TrackingConfig.SetTrackingProperties(modelBuilder);
        }
    }
}
