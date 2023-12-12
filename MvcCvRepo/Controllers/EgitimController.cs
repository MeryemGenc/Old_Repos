using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcCv.Models.Entity;
using MvcCv.Models.Sinif;

namespace MvcCv.Controllers
{
    public class EgitimController : Controller
    {
        // GET: Egitim
        DbMvcCvEntities db = new DbMvcCvEntities();
        public ActionResult Index()
        {
            Class1 cs = new Class1();
            cs.deger3 = db.TBLEDUCATION.ToList();
            return View(cs);
        }

        [HttpGet]
        public ActionResult YeniEgitim()
        {
            return View();
        }

        [HttpPost]
        public ActionResult YeniEgitim(TBLEDUCATION p)
        {
            db.TBLEDUCATION.Add(p);
            db.SaveChanges();
            return View();
        }

        public ActionResult Sil(int id)
        {
            var egt = db.TBLEDUCATION.Find(id);
            db.TBLEDUCATION.Remove(egt);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult EgitimGetir(int id)
        {
            var veriler = db.TBLEDUCATION.Find(id);
            return View("EgitimGetir", veriler);
        }

        public ActionResult Guncelle(TBLEDUCATION p)
        {
            var degerler = db.TBLEDUCATION.Find(p.ID);
            degerler.TITLE = p.TITLE;
            degerler.SUBTITLE = p.SUBTITLE;
            degerler.DEPARTMENT = p.DEPARTMENT;
            degerler.GPA = p.GPA;
            db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}