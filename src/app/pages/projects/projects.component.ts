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
      employer: 'İşveren',
      location: 'Lokasyon'
    },
    {
      id: 'aydın-nevzat-bicer-parkı',
      name: 'Aydın Nevzat Biçer Parkı',
      employer: 'İşveren',
      location: 'Aydın'
    },
    {
      id: 'bahcelievler-karakuvvetleri',
      name: 'Bahçelievler Karakuvvetleri',
      employer: 'İşveren',
      location: 'Lokasyon'
    },
    {
      id: 'balıkesir-baltkok-1300-konut',
      name: 'Balıkesir Baltkok 1300 Konut',
      employer: 'İşveren',
      location: 'Balıkesir'
    },
    {
      id: 'bolu-i̇l-özel-i̇dare-binası',
      name: 'Bolu İl Özel İdare Binası',
      employer: 'İşveren',
      location: 'Bolu'
    },
    {
      id: 'cankaya-erdal-i̇nönü-kapalı-yüzme-havuzu',
      name: 'Çankaya Erdal İnönü Kapalı Yüzme Havuzu',
      employer: 'İşveren',
      location: 'Ankara'
    },
    {
      id: 'gazi-anadolu-lisesi',
      name: 'Gazi Anadolu Lisesi',
      employer: 'İşveren',
      location: 'Lokasyon'
    },
    {
      id: 'gerede-anadolu-lisesi',
      name: 'Gerede Anadolu Lisesi',
      employer: 'İşveren',
      location: 'Bolu'
    },
    {
      id: 'i̇cişleri-bakanlık-konutu',
      name: 'İçişleri Bakanlık Konutu',
      employer: 'İşveren',
      location: 'Lokasyon'
    },
    {
      id: 'i̇zmir-nevvar-salih-i̇şgören-camii',
      name: 'İzmir Nevvar Salih İşgören Camii',
      employer: 'İşveren',
      location: 'İzmir'
    },
    {
      id: 'kütahya-simav-315-konut-toki',
      name: 'Kütahya Simav 315 Konut Toki',
      employer: 'İşveren',
      location: 'Kütahya'
    },
    {
      id: 'malatya-turgut-özal-botanik-parkı',
      name: 'Malatya Turgut Özal Botanik Parkı',
      employer: 'İşveren',
      location: 'Malatya'
    },
    {
      id: 'malatya-turgut-özal-parkı',
      name: 'Malatya Turgut Özal Parkı',
      employer: 'İşveren',
      location: 'Malatya'
    },
    {
      id: 'nevzat-bicer-parkı-aydın',
      name: 'Nevzat Biçer Parkı Aydın',
      employer: 'İşveren',
      location: 'Aydın'
    },
    {
      id: 'polatlı-sakarya-şehitliği',
      name: 'Polatlı Sakarya Şehitliği',
      employer: 'İşveren',
      location: 'Sakarya'
    },
    {
      id: 'uşak-ticaret-merkezi',
      name: 'Uşak Ticaret Merkezi',
      employer: 'İşveren',
      location: 'Uşak'
    },
    {
      id: 'van-sanliurfa-ve-gaziantep-i̇ha-ve-siha-hangarları',
      name: 'Van Şanlıurfa ve Gaziantep İha ve Siha Hangarları',
      employer: 'İşveren',
      location: 'Van, Şanlıurfa, Gaziantep',
      representativePhoto: true
    },
    {
      id: 'vedat-dalokay-nikah-ve-kongre-merkezi',
      name: 'Vedat Dalokay Nikah ve Kongre Merkezi',
      employer: 'İşveren',
      location: 'Lokasyon'
    },
    {
      id: 'yıldırım-beyazıt-parkı',
      name: 'Yıldırım Beyazıt Parkı',
      employer: 'İşveren',
      location: 'Lokasyon'
    },
    { id: 'zafer-koleji', name: 'Zafer Koleji', employer: 'İşveren', location: 'Lokasyon' }
  ];
  constructor(public dialog: Dialog) {}
}
