using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using JQueryWebAPI.Models;

namespace JQueryWebAPI.Controllers
{
    public class PositionsController : ApiController
    {
        dadosAjaxJqueryWebAPIEntities context = new dadosAjaxJqueryWebAPIEntities();
        [HttpGet]
        public IQueryable<Cargos> Positions()
        {
            return context.Cargos;
        }

        [HttpGet]
        public IQueryable<Cargos> SearchPositions(string position)
        {
            return context.Cargos.Where(p => p.nome.Contains(position));
        } 
    }
}
