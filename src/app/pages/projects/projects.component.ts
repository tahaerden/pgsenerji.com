import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
      id: 'asfat-genel-merkezi',
      name: 'Asfat Genel Merkezi',
      employer: 'Balkar',
      location: 'Etimesgut Ankara '
    },
    {
      id: 'aydın-nevzat-bicer-parkı',
      name: 'Aydın Nevzat Biçer Parkı',
      employer: 'Aydın Büyükşehir Belediyesi',
      location: 'Aydın Merkez'
    },
    {
      id: 'bahcelievler-karakuvvetleri',
      name: 'Bahçelievler Karakuvvetleri',
      employer: 'Karakuvvetleri',
      location: 'Bahçelievler, Ankara'
    },
    {
      id: 'balıkesir-baltkok-1300-konut',
      name: 'Balıkesir Baltkok 1300 Konut',
      employer: 'Balıkesir Büyükşehir Belediyesi',
      location: 'Balıkesir'
    },
    {
      id: 'bolu-i̇l-özel-i̇dare-binası',
      name: 'Bolu İl Özel İdare Binası',
      employer: 'Bolu Valiliği',
      location: 'Bolu'
    },
    {
      id: 'cankaya-erdal-i̇nönü-kapalı-yüzme-havuzu',
      name: 'Çankaya Erdal İnönü Kapalı Yüzme Havuzu',
      employer: 'Çankaya Belediyesi',
      location: 'Ankara'
    },
    {
      id: 'gazi-anadolu-lisesi',
      name: 'Gazi Anadolu Lisesi',
      employer: 'TOBB',
      location: 'Beysukent Ankara'
    },
    {
      id: 'gerede-anadolu-lisesi',
      name: 'Gerede Anadolu Lisesi',
      employer: 'Bolu Valiliği',
      location: 'Bolu'
    },
    {
      id: 'i̇cişleri-bakanlık-konutu',
      name: 'İçişleri Bakanlık Konutu',
      employer: 'İçişleri Bakanlığı',
      location: 'Çankara'
    },
    {
      id: 'i̇zmir-nevvar-salih-i̇şgören-camii',
      name: 'İzmir Nevvar Salih İşgören Camii',
      employer: 'Duygu Mühendislik',
      location: 'İzmir'
    },
    {
      id: 'kütahya-simav-315-konut-toki',
      name: 'Kütahya Simav 315 Konut Toki',
      employer: 'Toki',
      location: 'Kütahya'
    },
    {
      id: 'malatya-turgut-özal-parkı',
      name: 'Malatya Turgut Özal Parkı',
      employer: 'Malatya Valiliği',
      location: 'Malatya'
    },
    {
      id: 'polatlı-sakarya-şehitliği',
      name: 'Polatlı Sakarya Şehitliği',
      employer: 'Milli Savunma Bakanlığı',
      location: 'Polatlı Ankara'
    },
    {
      id: 'uşak-ticaret-merkezi',
      name: 'Uşak Ticaret Merkezi',
      employer: 'Toki',
      location: 'Uşak'
    },
    {
      id: 'van-sanliurfa-ve-gaziantep-i̇ha-ve-siha-hangarları',
      name: 'Van Şanlıurfa ve Gaziantep İha ve Siha Hangarları',
      employer: 'Balkar/Milli savunma bakanlığı',
      location: 'Van, Şanlıurfa, Gaziantep',
      representativePhoto: true
    },
    {
      id: 'vedat-dalokay-nikah-ve-kongre-merkezi',
      name: 'Vedat Dalokay Nikah ve Kongre Merkezi',
      employer: 'Çankaya Belediyesi',
      location: 'Çankaya'
    },
    {
      id: 'yıldırım-beyazıt-parkı',
      name: 'Yıldırım Beyazıt Parkı',
      employer: 'Ankara Büyükşehir Belediyesi',
      location: 'Çubuk Ankara'
    },
    { id: 'zafer-koleji', name: 'Zafer Koleji', employer: 'Zafer Yayınları', location: 'Ankara' }
  ];
  constructor(public dialog: Dialog) {}
}
