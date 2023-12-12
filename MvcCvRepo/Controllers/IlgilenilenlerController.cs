using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcCv.Models.Entity;
using MvcCv.Models.Sinif;

namespace MvcCv.Controllers
{
    public class IlgilenilenlerController : Controller
    {
        // GET: Ilgilenilenler
        DbMvcCvEntities db = new DbMvcCvEntities();
        public ActionResult Index(string p)
        {
            var degerler = from d in db.TBLAWARDS select d;
            if (!string.IsNullOrEmpty(p))
            {
                degerler = degerler.Where(m => m.AWARD.Contains(p));
            }

            //Class1 cs = new Class1();
            //cs.deger6 = db.TBLAWARDS.ToList();
            return View(degerler.ToList());
        }

        [HttpGet]
        public ActionResult YeniUzmanlıklar()
        {
            return View();
        }

        [HttpPost]
        public ActionResult YeniUzmanlıklar(TBLAWARDS p)
        {
            db.TBLAWARDS.Add(p);
            db.SaveChanges();
            return View();
        }

        public ActionResult Sil(int id)
        {
            var uzman = db.TBLAWARDS.Find(id);
            db.TBLAWARDS.Remove(uzman);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult IlgilenilenlerGetir(int id)
        {
            var veriler = db.TBLAWARDS.Find(id);
            return View("IlgilenilenlerGetir", veriler);
        }

        public ActionResult Guncelle(TBLAWARDS p)
        {
            var degerler = db.TBLAWARDS.Find(p.ID);
            degerler.AWARD = p.AWARD;
            db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}