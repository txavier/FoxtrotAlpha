namespace FoxtrotAlpha.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddUPC : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.actionFigure", "upc", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.actionFigure", "upc");
        }
    }
}
