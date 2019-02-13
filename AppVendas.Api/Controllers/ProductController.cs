using AppVendas.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace AppVendas.Api.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IRepositoryProduct _repository;

        public ProductController(IRepositoryProduct repository)
        {
            _repository = repository;
        }

        public IActionResult Get()
        {
            return Ok(_repository.GetAll());
        }

    }
}
