using Auto.Controller.Objects;
using AutoClutch.Auto.Core.Interfaces;
using FoxtrotAlpha.Core.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace FoxtrotAlpha.Controllers
{
    public class actionFiguresController : BaseApiController<actionFigure>
    {
        public actionFiguresController(IService<actionFigure> actionFigureService)
            : base(actionFigureService)
        { }
    }
}