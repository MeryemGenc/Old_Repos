using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using OgrenciNotMvc.Models.EntityFramework;


namespace OgrenciNotMvc.Controllers
{
    public class OgrenciController : Controller
    {
        // GET: Ogrenci
        DbMvcOkulEntities db = new DbMvcOkulEntities();
        public ActionResult Index()
        {
            var ogr = db.TBLOGRENCILER.ToList();
            return View(ogr);
        }

        [HttpGet]
        public ActionResult YeniOgrenci()
        {
            //linq Sorgusu
            List<SelectListItem> degerler = (from i in db.TBLKULUPLER.ToList()
                                             select new SelectListItem
                                             {
                                                 Text = i.KULUPAD,
                                                 Value = i.KULUPID.ToString()
                                             }).ToList();
            ViewBag.dgr = degerler;

            return View();
        }

        [HttpPost]
        public ActionResult YeniOgrenci(TBLOGRENCILER p)
        {
            //linq sorgusu
            var klp = db.TBLKULUPLER.Where(x => x.KULUPID == p.TBLKULUPLER.KULUPID).FirstOrDefault();
            p.TBLKULUPLER = klp;
            db.TBLOGRENCILER.Add(p);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult Sil(int id)
        {
            var ogr = db.TBLOGRENCILER.Find(id);
            db.TBLOGRENCILER.Remove(ogr);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult OgrenciGetir(int id)
        {
            var ogr = db.TBLOGRENCILER.Find(id);
            return View("OgrenciGetir", ogr);
        }

        public ActionResult Guncelle(TBLOGRENCILER p)
        {
            var ogr = db.TBLOGRENCILER.Find(p.OGRENCIID);
            ogr.OGRAD = p.OGRAD;
            ogr.OGRSOYAD = p.OGRSOYAD;
            ogr.OGRFOTOGRAF = p.OGRFOTOGRAF;
            ogr.OGRCINSIYET = p.OGRCINSIYET;
            ogr.OGRKULUP = p.OGRKULUP;

            db.SaveChanges();

            return RedirectToAction("Index");
        }
    }
}