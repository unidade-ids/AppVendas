using AppVendas.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppVendas.Domain.Map
{
    public class ProductMap : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.ToTable("Products");

            builder.HasKey(x => x.Id);

            builder.Property(x => x.Name)
                .IsRequired()
                .HasColumnType("varchar(155)");

            builder.Property(x => x.Description)
                .HasColumnType("varchar(255)");

            builder.Property(x => x.Update);
            builder.Property(x => x.Price)
                .IsRequired()
                .HasColumnType("decimal(12,2)");
        }
    }
}
