using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using MvcCv.Models.Entity;
using MvcCv.Models.Sinif;
using PagedList;
using PagedList.Mvc;

namespace MvcCv.Controllers
{
    public class YeteneklerController : Controller
    {
        // GET: Yetenekler
        DbMvcCvEntities db = new DbMvcCvEntities();
        public ActionResult Index(int sayfa=1)
        {
            //Class1 cs = new Class1();
            var degerler = db.TBLSKILLS.ToList().ToPagedList(sayfa,3);
            return View(degerler);
        }

        [HttpGet]
        public ActionResult YeniYetenek()
        {
            return View();
        }

        [HttpPost]
        public ActionResult YeniYetenek(TBLSKILLS p)
        {
            db.TBLSKILLS.Add(p);
            db.SaveChanges();
            return View();
        }

        public ActionResult Sil(int id)
        {
            var ytnk = db.TBLSKILLS.Find(id);
            db.TBLSKILLS.Remove(ytnk);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public ActionResult YetenekGetir(int id)
        {
            var veriler = db.TBLSKILLS.Find(id);
            return View("YetenekGetir", veriler);
        }

        public ActionResult Guncelle(TBLSKILLS p)
        {
            var degerler = db.TBLSKILLS.Find(p.ID);
            degerler.SKILL = p.SKILL;
            db.SaveChanges();
            return RedirectToAction("Index");
        }
    }
}