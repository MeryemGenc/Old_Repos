using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcCv.Models.Entity;
using MvcCv.Models.Sinif;

namespace MvcCv.Controllers
{
    public class HobilerController : Controller
    {
        // GET: Hobiler
        DbMvcCvEntities db = new DbMvcCvEntities();
        public ActionResult Index()
        {
            Class1 cs = new Class1();
            cs.deger5 = db.TBLINTERESTS.ToList();
            return View(cs);
        }

        [HttpGet]
        public ActionResult YeniHobiler()
        {
            return View();
        }

        [HttpPost]
        public ActionResult YeniHobiler(TBLINTERESTS p)
        {
            db.TBLINTERESTS.Add(p);
            db.SaveChanges();
            return View();
        }

        public ActionResult Sil(int id)
        {
            var hobi = db.TBLINTERESTS.Find(id);
            db.TBLINTERESTS.Remove(hobi);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult HobiGetir(int id)
        {
            var veriler = db.TBLINTERESTS.Find(id);
            return View("HobiGetir", veriler);
        }

        public ActionResult Guncelle(TBLINTERESTS p)
        {
            var degerler = db.TBLINTERESTS.Find(p.ID);
            degerler.INTEREST = p.INTEREST;
            db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}