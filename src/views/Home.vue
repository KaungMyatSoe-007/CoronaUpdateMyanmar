<template>
<div>
  <div class="jumbotron mt-1 mb-0">
    <h1 class="display-4">Go Away, Corona!</h1>
    <hr class="my-4" />

    <div class="row">
      <div class="col-md-6">
        <div class="my-4 text-center">
          <span class=" lead"> Myanmar : </span>&nbsp;
          <img src="@/assets/flag.png" class=" img-fluid" width="80" alt="myanmar flag" />
        </div>
        
        <div class="my-4">
          <p class="h2 text-center text-muted">Coronavirus Cases :</p>
          <p class="h2 text-center text-dark">
            {{ corona_data.Confirmed }}
          </p>
        </div>

        <div class="my-4">
          <p class="h2 text-center text-muted">Deaths :</p>
          <p class="h2 text-center text-danger">
            {{ corona_data.Deaths }}
          </p>
        </div>

        <div class="my-4">
          <p class="h2 text-center text-muted">Recovered :</p>
          <p class="h2 text-center text-success">
            {{ corona_data.Recovered }}
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <img src="@/assets/covid.jpg" class=" my-4 embed-responsive" alt="notice board" />
      </div>
    </div>
    <p class=" text-justify lead">
      မြန်မာနိုင်ငံ၏ နေ့စဉ် ကိုရိုနာဗိုင်းရပ်စ်ရောဂါ (COVID-19) ကူးစက်ဖြစ်ပွားမှုသတင်းအချက်အလက် ဖြစ်ပါသည်။ 
    </p>
    <router-link class="btn btn-outline-info btn-lg" to="/do-and-dont" role="button"> Do's & Don'ts </router-link>
  </div>

  <div class=" container my-2">
    <h3 class=" my-4">ကိုရိုနာဗိုင်းရပ်စ်ရောဂါ (COVID-19)ကို မိမိ ကစ ကာကွယ်ပါ</h3>
    <hr class=" my-4">
    <p class=" lead text-justify">
        &nbsp;&nbsp;&nbsp;&nbsp;ကိုရိုနာဗိုင်းရပ်စ်ရောဂါ (COVID-19) ကူးစက်ဖြစ်ပွားမှုကို ထိရောက်စွာကာကွယ်ထိန်းချုပ်ကုသနိုင်ရန်အတွက် ကြိုးပမ်းဆောင်ရွက်ရာတွင် ကျွန်ုပ်တို့အားလုံး အတူတကွ ပူးပေါင်းပါဝင်ဆောင်ရွက်မှသာ အချိန်တိုအတွင်း ထိရောက်အောင်မြင်၍ ထိခိုက်မှုအနည်းဆုံးဖြင့်ကျော်ဖြတ်နိုင်မည် ဖြစ်ပါသည်။ သို့ဖြစ်ပါ၍ အောက်ဖော်ပြပါအချက်များကို အားလုံးကိုယ်စီလိုက်နာဆောင်ရွက်၍ ပူးပေါင်းပါဝင်ပံ့ပိုးဆောင်ရွက်ပေးကြပါရန် လိုအပ်ပါသည်-
    </p>
    <p>
        <ul class=" list-unstyled">
        <li class=" lead my-3 text-justify">
        <div class="media">
            <img src="@/assets/footer.jpg" class=" align-self-center mr-3" width="70" alt="...">
            <div class="media-body">
                <p>တတ်နိုင်သမျှ အိမ်တွင်း၌သာနေထိုင်ပါ၊ အိမ်တွင်နေထိုင်ခြင်းသည် မိမိကိုယ်တိုင်နှင့်အတူနေ မိသားစုဝင်တို့အားရောဂါကူးစက်မှုအန္တရာယ်မှကာကွယ်ပေးခြင်း၊ ရောဂါကွင်းဆက်များကိုအချိန်တိုအတွင်း ပြတ်တောက်စေခြင်းနှင့် ဒေသတွင်း ရောဂါကို အမြန်ဆုံးထိန်းချုပ်နိုင်ခြင်းရလဒ်တို့ကို ရရှိစေပါသည်၊</p>
            </div>
        </div>
            
        </li>
        <li class=" lead my-3 text-justify">
            <div class="media">
            <img src="@/assets/footer.jpg" class=" align-self-center mr-3" width="70" alt="...">
            <div class="media-body">
                <p>အိမ်တွင်ဧည့်သည်လက်ခံခြင်း လုံးဝမပြုပါနှင့်၊ မိမိကိုယ်တိုင်လည်း ဧည့်သည်အဖြစ် သွားရောက်ခြင်း လုံးဝ မပြုပါနှင့်၊</p>
            </div>
        </div>
        </li>
        <li class=" lead my-3 text-justify">
            <div class="media">
            <img src="@/assets/footer.jpg" class=" align-self-center mr-3" width="70" alt="...">
            <div class="media-body">
                <p>မဖြစ်မနေအပြင်ထွက်ရပါက ပါးစပ်နှင့်နှာခေါင်းစည်း(Mask) ကို မဖြစ်မနေ တပ်ဆင်ပါ၊ လက်ကို အနည်းဆုံး စက္ကန့်(၂၀)ကြာအောင် စနစ်တကျဆေးကြောပါ၊ အခြားသူများနှင့် (၆)ပေအကွာ ခပ်ခွာခွာနေပါ၊ လေဝင်လေထွက် မကောင်းသောအခန်းများသို့ သွားရောက်ခြင်းမှ ရှောင်ကြဉ်ပါ၊</p>
            </div>
        </div>
        </li>
        <li class=" lead my-3 text-justify">
             <div class="media">
            <img src="@/assets/footer.jpg" class=" align-self-center mr-3" width="70" alt="...">
            <div class="media-body">
                <p>လူစုလူဝေး လုံးဝ ရှောင်ကြဉ်ပါ၊၊</p>
            </div>
        </div>
        </li>
        <li class=" lead my-3 text-justify">
            <div class="media">
            <img src="@/assets/footer.jpg" class=" align-self-center mr-3" width="70" alt="...">
            <div class="media-body">
                <p>ဖြစ်နိုင်ပါက တစ်ပတ်လျှင်တစ်ကြိမ်ခန့်သာ စျေးဝယ်ယူပါ၊ ပါးစပ်နှင့်နှာခေါင်းစည်း စနစ်တကျ တပ်ဆင်ထားခြင်း မရှိသော စျေးရောင်းသူများထံမှ စျေးမဝယ်ပါနှင့်၊</p>
            </div>
        </div>
        </li>
        <li class=" lead my-3 text-justify">
            <div class="media">
            <img src="@/assets/footer.jpg" class=" align-self-center mr-3" width="70" alt="...">
            <div class="media-body">
                <p> အပြင်ထွက်ရာမှအိမ်ပြန်ရောက်သောအခါတွင် အိမ်သို့ ရောဂါပိုးများသယ်ဆောင်လာခြင်းမရှိစေရန် သတိပြုပါ၊ အသုံးပြုပြီးသော ပါးစပ်နှင့်နှာခေါင်းစည်း (Mask) နှင့် တစ်ခါသုံးပစ္စည်းများကို အိမ်အပြင်တွင် စနစ်တကျစွန့်ပစ်ပါ၊ အဝတ်အစားမလဲမီ/ ကိုယ်လက်သန့်စင်ခြင်းမပြုမီ အိမ်သားများနှင့် အနီးကပ်ထိတွေ့ခြင်းမှ ရှောင်ကြဉ်ပါ၊</p>
            </div>
        </div>
        </li>
        <li class=" lead my-3 text-justify"> 
            <div class="media">
            <img src="@/assets/footer.jpg" class=" align-self-center mr-3" width="70" alt="...">
            <div class="media-body">
                <p>ရောဂါကာကွယ်ထိန်းချုပ်ကုသရေးလုပ်ငန်းများတွင် တတ်နိုင်သည့်ဘက်မှ လူအင်အား၊ ငွေကြေး၊ ပစ္စည်း၊ ကျွမ်းကျင်မှုပညာရပ်များဖြင့် စနစ်တကျပါဝင်ပူးပေါင်းပံ့ပိုးပေးကြပါရန် ဖြစ်ပါသည်။</p>
            </div>
        </div>
        </li>
    </ul>
   </p>
   <hr class=" my-4">
</div>
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "Home",
  data() {
    return {
      loading: false,
      corona_data: [],
    };
  },
  created() {
    this.loading = true;
    axios
      .get(
        "https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases2_v1/FeatureServer/2/query?where=Country_Region%20%3D%20'BURMA'&outFields=*&outSR=4326&f=json"
      )
      .then((response) => {
        console.log(response.data.features[0].attributes);
        this.corona_data = response.data.features[0].attributes;
        this.loading = false;
      })
      .catch((e) => {
        this.loading = false;
      });
  },
};
</script>
