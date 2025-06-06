var builder = WebApplication.CreateBuilder(args);

// Configuração de CORS

builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Services.AddControllers();
builder.Services.AddAuthorization();
builder.Services.AddCors(options =>
{
    options.AddPolicy("PermitirTudo", policy =>
    {
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader();
    });
});

var app = builder.Build();

// Adicionando o CORS ao pipeline
app.UseCors("PermitirTudo");

app.UseAuthorization();
app.MapControllers();
app.Run();
