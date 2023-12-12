using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace KurumsalWeb.Models.Model
{
    [Table("Slider")]
    public class Slider
    {
        [Key]
        public int SliderId { get; set; }
        [DisplayName("Slider Baslik"),StringLength(30,ErrorMessage ="Maximum 30 karakter.")]
        public string Baslik { get; set; }
        [DisplayName("Slider Aciklama"), StringLength(150, ErrorMessage = "Maximum 150 karakter.")]
        public string Aciklama { get; set; }
        [DisplayName("Slider Resim"), StringLength(250)]
        public string ResimURL { get; set; }

    }
}