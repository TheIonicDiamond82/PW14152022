const App =
{
    data: function()
    {
        return{
            mensaje: "Hola Vue.js",
            muestra: false,
            edad: 21,
            nombre:"",
            personas:[],
            cantidad:0,
        }
    },
    methods: {
        activarMuestra: function(){
            this.muestra=true;
        },
        desactivarMuestra: function()
        {
            this.muestra=false;
        },
        randomuser: async function()
        {
            //this.cantidad=this.cantidad+1;
            let n= "";
            let p=[];
            await axios.get('https://randomuser.me/api/?results='+this.cantidad).then(function(response)
            {
                console.log(response.data.results[0].name.last);
                n=response.data.results[0].name.first +" "+ response.data.results[0].name.last;
                p=response.data.results;
            });
            this.nombre=n;
            this.personas=p;
            
        }
    },
}

Vue.createApp(App).mount("#app");