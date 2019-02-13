using AppVendas.Domain.Entities;
using AppVendas.Domain.Map;
using Microsoft.EntityFrameworkCore;

namespace AppVendas.Infra.Context
{
    public class AppVendasContext : DbContext
    {

        const string connectionString = "Server=UNIDADE_PC\\SQLEXPRESS;Database=AppVendas;User Id=sa;password=unidade;Trusted_Connection=true;MultipleActiveResultSets=true";

        public DbSet<Product> Products { get; set; }

        public AppVendasContext(DbContextOptions<AppVendasContext> options)
            :base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProductMap());
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionString);
        }
    }
}
