// Design and Developed By MD Nahid Hassan, Email:nhassan213@gmail.com
var locationObject = {
  "Barisal":{"Barguna":["Amtali","Bamna","Barguna Sadar","Betagi","Patharghata","Taltoli",],"Barisal":["Agailjhara","Babuganj","Bakerganj","Banaripara","Barisal Sadar","Gaurnadi","Hizla","Mehendiganj","Muladi","Wazirpur",],"Bhola":["Bhola Sadar","Burhanuddin","Char Fasson","Daulatkhan","Lalmohan","Manpura","Tazumuddin",],"Jhalokati":["Jhalokati Sadar","Kathalia","Nalchity","Rajapur",],"Patuakhali":["Bauphal","Dashmina","Dumki","Galachipa","Kalapara","Mirzaganj","Patuakhali Sadar","Rangabali",],"Pirojpur":["Bhandaria","Kawkhali","Mathbaria","Nazirpur","Nesarabad (Swarupkati)","Pirojpur Sadar","Zianagor",],},"Chittagong":{"Bandarban":["Ali Kadam","Bandarban Sadar","Lama","Naikhongchhari","Rowangchhari","Ruma","Thanchi",],"Brahmanbaria":["Akhaura","Ashuganj","Bancharampur","Bijoynagar","Brahmanbaria Sadar","Kasba","Nabinagar","Nasirnagar","Sarail",],"Chandpur":["Chandpur Sadar","Faridganj","Haimchar","Haziganj","Kachua","Matlab Dakshin","Matlab Uttar","Shahrasti",],"Chittagong":["Anwara","Bandor (Chittagong Port) Thana","Banshkhali","Boalkhali","Chandanaish","Chandgaon Thana","Double Mooring Thana","Fatikchhari","Hathazari","Kotwali Thana","Lohagara","Mirsharai","Pahartali Thana","Panchlaish Thana","Patiya","Rangunia","Raozan","Sandwip","Satkania","Sitakunda",],"Comilla":["Barura","Brahmanpara","Burichang","Chandina","Chauddagram","Comilla Adarsha Sadar","Comilla Sadar Dakshin","Daudkandi","Debidwar","Homna","Laksam","Meghna","Monohargonj","Muradnagar","Nangalkot","Titas",],"Cox's Bazar":["Chakaria","Cox's Bazar Sadar","Kutubdia","Maheshkhali","Pekua","Ramu","Teknaf","Ukhia",],"Feni":["Chhagalnaiya","Daganbhuiyan","Feni Sadar","Fulgazi","Parshuram","Sonagazi",],"Khagrachhari":["Dighinala","Khagrachhari","Lakshmichhari","Mahalchhari","Manikchhari","Matiranga","Panchhari","Ramgarh",],"Lakshmipur":["Kamalnagar","Lakshmipur Sadar","Raipur","Ramganj","Ramgati",],"Noakhali":["Begumganj","Chatkhil","Companiganj","Hatiya","Kabirhat","Noakhali Sadar","Senbagh","Sonaimuri","Subarnachar",],"Rangamati":["Bagaichhari","Barkal","Belaichhari","Juraichhari","Kaptai","Kawkhali (Betbunia)","Langadu","Naniyachar","Rajasthali","Rangamati Sadar",],},"Dhaka":{"Dhaka":["Dhamrai","Dohar","Keraniganj","Nawabganj","Savar",],"Faridpur":["Alfadanga","Bhanga","Boalmari","Charbhadrasan","Faridpur Sadar","Madhukhali","Nagarkanda","Sadarpur","Saltha",],"Gazipur":["Gazipur Sadar","Kaliakair","Kaliganj","Kapasia","Sreepur",],"Gopalganj":["Gopalganj Sadar","Kashiani","Kotalipara","Muksudpur","Tungipara",],"Kishoreganj":["Astagram","Bajitpur","Bhairab","Hossainpur","Itna","Karimganj","Katiadi","Kishoreganj Sadar","Kuliarchar","Mithamain","Nikli","Pakundia","Tarail",],"Madaripur":["Kalkini","Madaripur Sadar","Rajoir","Shibchar",],"Manikganj":["Daulatpur","Ghior","Harirampur","Manikgonj Sadar","Saturia","Shivalaya","Singair",],"Munshiganj":["Gazaria","Lohajang","Munshiganj Sadar","Sirajdikhan","Sreenagar","Tongibari",],"Narayanganj":["Araihazar","Bandar","Narayanganj Sadar","Rupganj","Sonargaon",],"Narsingdi":["Belabo","Monohardi","Narsingdi Sadar","Palash","Raipura","Shibpur",],"Rajbari":["Baliakandi","Goalandaghat","Kalukhali","Pangsha","Rajbari Sadar",],"Shariatpur":["Bhedarganj","Damudya","Gosairhat","Naria","Shakhipur","Shariatpur Sadar","Zanjira",],"Tangail":["Basail","Bhuapur","Delduar","Dhanbari","Ghatail","Gopalpur","Kalihati","Madhupur","Mirzapur","Nagarpur","Sakhipur","Tangail Sadar",],},"Khulna":{"Bagerhat":["Bagerhat Sadar","Chitalmari","Fakirhat","Kachua","Mollahat","Mongla","Morrelganj","Rampal","Sarankhola",],"Chuadanga":["Alamdanga","Chuadanga Sadar","Damurhuda","Jibannagar",],"Jessore":["Abhaynagar","Bagherpara","Chaugachha","Jessore Sadar","Jhikargachha","Keshabpur","Manirampur","Sharsha",],"Jhenaida":["Harinakunda","Jhenaidah Sadar","Kaliganj","Kotchandpur","Maheshpur","Shailkupa",],"Khulna":["Batiaghata","Dacope","Daulatpur Thana","Dighalia","Dumuria","Harintana Thana","Khalishpur Thana","Khan Jahan Ali Thana","Kotwali Thana","Koyra","Paikgachha","Phultala","Rupsha","Sonadanga Thana","Terokhada",],"Kushtia":["Bheramara","Daulatpur","Khoksa","Kumarkhali","Kushtia Sadar","Mirpur","Shekhpara",],"Magura":["Magura Sadar","Mohammadpur","Shalikha","Sreepur",],"Meherpur":["Gangni","Meherpur Sadar","Mujibnagar",],"Narail":["Kalia","Lohagara","Naragati Thana","Narail Sadar",],"Satkhira":["Assasuni","Debhata","Kalaroa","Kaliganj","Satkhira Sadar","Shyamnagar","Tala",],},"Mymensingh":{"Jamalpur":["Baksiganj","Dewanganj","Islampur","Jamalpur Sadar","Madarganj","Melandaha","Sarishabari",],"Mymensingh":["Bhaluka","Dhobaura","Fulbaria","Gaffargaon","Gauripur","Haluaghat","Ishwarganj","Muktagachha","Mymensingh Sadar","Nandail","Phulpur","Tara Khanda","Trishal",],"Netrokona":["Atpara","Barhatta","Durgapur","Kalmakanda","Kendua","Khaliajuri","Madan","Mohanganj","Netrokona Sadar","Purbadhala",],"Sherpur":["Jhenaigati","Nakla","Nalitabari","Sherpur Sadar","Sreebardi",],},"Rajshahi":{"Bogra":["Adamdighi","Bogra Sadar","Dhunat","Dhupchanchia","Gabtali","Kahaloo","Nandigram","Sariakandi","Shajahanpur","Sherpur","Shibganj","Sonatola",],"Joypurhat":["Akkelpur","Joypurhat Sadar","Kalai","Khetlal","Panchbibi",],"Naogaon":["Atrai","Badalgachhi","Dhamoirhat","Manda","Mohadevpur","Naogaon Sadar","Niamatpur","Patnitala","Porsha","Raninagar","Sapahar",],"Natore":["Bagatipara","Baraigram","Gurudaspur","Lalpur","Naldanga","Natore Sadar","Singra",],"Nawabganj":["Bholahat","Gomastapur","Nachole","Nawabganj Sadar","Shibganj",],"Pabna":["Ataikula","Atgharia","Bera","Bhangura","Chatmohar","Faridpur","Ishwardi","Pabna Sadar","Santhia","Sujanagar",],"Rajshahi":["Bagha","Bagmara","Boalia Thana","Charghat","Durgapur","Godagari","Matihar Thana","Mohanpur","Paba","Puthia","Rajpara Thana","Shah Mokdum Thana","Tanore",],"Sirajganj":["Belkuchi","Chauhali","Kamarkhanda","Kazipur","Raiganj","Shahjadpur","Sirajganj Sadar","Tarash","Ullahpara",],},"Rangpur":{"Dinajpur":["Biral","Birampur","Birganj","Bochaganj","Chirirbandar","Dinajpur Sadar","Ghoraghat","Hakimpur","Kaharole","Khansama","Nawabganj","Parbatipur","Phulbari",],"Gaibandha":["Gaibandha Sadar","Gobindaganj","Palashbari","Phulchhari","Sadullapur","Sughatta","Sundarganj",],"Kurigram":["Bhurungamari","Char Rajibpur","Chilmari","Kurigram Sadar","Nageshwari","Phulbari","Rajarhat","Raomari","Ulipur",],"Lalmonirhat":["Aditmari","Hatibandha","Kaliganj","Lalmonirhat Sadar","Patgram",],"Nilphamari":["Dimla","Domar","Jaldhaka","Kishoreganj","Nilphamari Sadar","Saidpur",],"Panchagarh":["Atwari","Boda","Debiganj","Panchagarh Sadar","Tetulia",],"Rangpur":["Badarganj","Gangachhara","Kaunia","Mithapukur","Pirgachha","Pirganj","Rangpur Sadar","Taraganj",],"Thakurgaon":["Baliadangi","Haripur","Pirganj","Ranisankail","Thakurgaon Sadar",],},"Sylhet":{"Habiganj":["Ajmiriganj","Bahubal","Baniyachong","Chunarughat","Habiganj Sadar","Lakhai","Madhabpur","Nabiganj",],"Moulvibazar":["Barlekha","Juri","Kamalganj","Kulaura","Moulvibazar Sadar","Rajnagar","Sreemangal",],"Sunamganj":["Bishwamvarpur","Chhatak","Derai","Dharampasha","Dowarabazar","Jagannathpur","Jamalganj","South Sunamganj","Sullah","Sunamganj Sadar","Tahirpur",],"Sylhet":["Balaganj","Beanibazar","Bishwanath","Companigonj","Fenchuganj","Golapganj","Gowainghat","Jaintiapur","Kanaighat","South Shurma","Sylhet Sadar","Zakiganj",],},

}
window.onload = function() {
  var divisionSel = document.getElementById("division");
  var districtSel = document.getElementById("district");
  var upazilaSel = document.getElementById("upazila");
  var form_type = document.getElementById("form_type").value;
  for (var x in locationObject) {
    divisionSel.options[divisionSel.options.length] = new Option(x, x);
  }
  if (form_type =='EDIT') {
    divisionSel.onclick = function() {
      upazilaSel.length = 1;
      districtSel.length = 1;
      for (var y in locationObject[this.value]) {
        districtSel.options[districtSel.options.length] = new Option(y, y);
      }
    }
    districtSel.onclick = function() {
      upazilaSel.length = 1;
      var z = locationObject[divisionSel.value][this.value];
      for (var i = 0; i < z.length; i++) {
        upazilaSel.options[upazilaSel.options.length] = new Option(z[i], z[i]);
      }
    }
  }
  else{
      divisionSel.onchange = function() {
        upazilaSel.length = 1;
        districtSel.length = 1;
        for (var y in locationObject[this.value]) {
          districtSel.options[districtSel.options.length] = new Option(y, y);
        }
      }
      districtSel.onchange = function() {
        upazilaSel.length = 1;
        var z = locationObject[divisionSel.value][this.value];
        for (var i = 0; i < z.length; i++) {
          upazilaSel.options[upazilaSel.options.length] = new Option(z[i], z[i]);
        }
      }
  }
}

// Design and Developed By MD Nahid Hassan, Email:nhassan213@gmail.com
