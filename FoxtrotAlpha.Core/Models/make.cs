using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace FoxtrotAlpha.Core.Models
{
    [Table("make")]
    public class make
    {
        public make()
        {
            actionFigures = new HashSet<actionFigure>();
        }

        public virtual ICollection<actionFigure> actionFigures { get; set; }

        public int makeId { get; set; }

        [Required]
        public string name { get; set; }
    }
}