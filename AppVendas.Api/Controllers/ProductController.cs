using AppVendas.Api.Model;
using AppVendas.Domain.Entities;
using AppVendas.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;

namespace AppVendas.Api.Controllers
{
    [Route("api/v1/[controller]")]
    public class ProductController : Controller
    {
        private readonly IRepositoryProduct _repository;

        public ProductController(IRepositoryProduct repository)
        {
            _repository = repository;
        }

        public IActionResult Get()
        {
            return Ok(_repository.GetAll().Select(p => new ProductViewModel {
                Id          = p.Id,
                Name        = p.Name,
                Description = p.Description,
                Price       = p.Price
            }));
        }

        [HttpGet("{id:int}")]
        public IActionResult Get(int id)
        {
            return Ok(_repository.GetById(id));
        }

        [HttpPost]
        public IActionResult Post([FromBody]ProductViewModel product)
        {
            if (product == null)
                return BadRequest("objeto nulo");

            var p = new Product(product.Name, product.Description, product.Price);

            _repository.Add(p);
            _repository.Save();

            return Created("api/v1/product", p);
        }

        [HttpPut("{id:int}")]
        public IActionResult Put(int id, [FromBody]ProductViewModel model)
        {
            if (id == 0 && model == null)
                return BadRequest("Parâmetros inválidos para alteração");

            var product = _repository.GetById(id);

            product.Name        = model.Name;
            product.Description = model.Description;
            product.Price       = model.Price;

            _repository.Update(product);
            _repository.Save();


            return Ok(product);
        }

        [HttpDelete]
        public IActionResult Delete(int id)
        {
            if (id == 0)
                return BadRequest("Parâmetro nullo");

            try
            {
                _repository.Delete(id);
                _repository.Save();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }

            return Ok("Produto delatado com sucesso");
        }

    }
}
