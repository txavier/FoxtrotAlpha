namespace FoxtrotAlpha.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddActionFigureModel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.actionFigure",
                c => new
                    {
                        actionFigureId = c.Int(nullable: false, identity: true),
                        name = c.String(nullable: false),
                        makeId = c.Int(),
                        imageUrl = c.String(),
                    })
                .PrimaryKey(t => t.actionFigureId)
                .ForeignKey("dbo.make", t => t.makeId)
                .Index(t => t.makeId);
            
            CreateTable(
                "dbo.make",
                c => new
                    {
                        makeId = c.Int(nullable: false, identity: true),
                        name = c.String(nullable: false),
                    })
                .PrimaryKey(t => t.makeId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.actionFigure", "makeId", "dbo.make");
            DropIndex("dbo.actionFigure", new[] { "makeId" });
            DropTable("dbo.make");
            DropTable("dbo.actionFigure");
        }
    }
}
