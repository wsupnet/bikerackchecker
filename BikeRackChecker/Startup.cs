using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BikeRackChecker.Startup))]
namespace BikeRackChecker
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
