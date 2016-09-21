using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace FoxtrotAlpha.Core.Models
{
    [Table("actionFigure")]
    public class actionFigure
    {
        public int actionFigureId { get; set; }

        [Required]
        public string name { get; set; }
        public int? makeId { get; set; }
        public string imageUrl { get; set; }
        public string upc { get; set; }
        public make make { get; set; }
    }
}
