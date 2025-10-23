// script.js
        // --- Splash Screen Logic ---
        window.onload = () => {
            const splashScreen = document.getElementById('splash-screen');
            const mainContent = document.getElementById('main-content');
            setTimeout(() => {
                if (splashScreen) {
                    splashScreen.style.opacity = '0';
                    splashScreen.style.visibility = 'hidden';
                }
                if (mainContent) {
                    mainContent.style.opacity = '1';
                }
            }, 500);
        };
        
        document.addEventListener('DOMContentLoaded', () => {
            // --- Mock Data ---
            const teachers = [
                { id: '197008272005011007', type: 'ASN', name: 'Agus Harianto, M.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1wjxDs6nrslOEVyx4rGJPRiX7E2lXJdKP?usp=sharing',
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1sp7fpmPrqgd4kltNCVTqo3yzMfoOGbxT?usp=sharing'
                }},
                { id: '196511101988031018', type: 'ASN', name: 'Niman, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1EBpW37In92c-NATWLtAdQ1639QXAyI_6?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/14TukVwoH0TQeqsUhA73N-gXhPGwNFWO0?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1UodatrFfivUX-10DdU7bTv1a48bxSWE0?usp=sharing'
                }},
                { id: '196607141990102001', type: 'ASN', name: 'Dra. Idayati', photos: {
                    2022: 'https://drive.google.com/drive/folders/19LxRYYBRaUD4doph-G-rMt7ToMuF62QB?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1Pu5FMj2LtsL5o8JLUYq9wyLEp1-sBYro?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/18pk3tGwA-J33SViCJC-XoS-hNkcXjScr?usp=sharing'
                }},
                { id: '196903081993032006', type: 'ASN', name: 'Dra. Fiva Tri Wahyuni', photos: {
                    2022: 'https://drive.google.com/drive/folders/12i_L0Zda9DyvZREHDhXtjzaYe2EBMEoU?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/11F7JWLBloZY8vq7rQ6lK3g7CxAmr5nVt?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1vFJvwPeeAo1kZkDdoM4asDtqRK25lzLu?usp=sharing'
                }},
                { id: '196510261988032007', type: 'ASN', name: 'Rita Kurnia Setijowati, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/17zknVzXG8iQ2jUUAQzCGtVRA5T85AEhS?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1aO5a6abA5T-frF7pcW81THjRvLJDUgXj?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1I8OmHdzDTsYNun2-18zX_X9E6C83heRi?usp=sharing'
                }},
                { id: '196703021996022001', type: 'ASN', name: 'Dra. Diana Ida Prabawaningtyas', photos: {
                    2022: null,
                    2023: 'https://drive.google.com/drive/folders/1gJZXIA0D5cRiHgo5IYugQEeiw5waczl2?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1MV-eUQw61AaKGUIhvNNodrCnmPyp52pr?usp=sharing'
                }},
                { id: '196801281998031004', type: 'ASN', name: 'Ahmadi, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1pZQJIIpg7IsDoPkzF0CS5v0LIl8xNwHX?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1-T-iSMsRLWxXHSe_bB4osxfEziWv_mxm?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1f3pYGl_mkLz-gTe3xuP5lKHm0fBZjQRO?usp=sharing'
                }},
                { id: '196509201990032009', type: 'ASN', name: 'Lilik Hendriyanti, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1S-njuundoQeGFZMDFgb4qU4DQqJFYtup?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1IOSTZgYlstaUzakplTe6R7Y6mHikaVVK?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1VaTfJxHviZO4Ijb3xeROtYrRNssWipUG?usp=sharing'
                }},
                { id: '196808181993031013', type: 'ASN', name: 'Pujiono, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1PW5YW4wQPFqKI7lUAaPRR80UbhWYLKGi?usp=sharing',
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1qw_luliDmJK4pBJgO1VKRfqyLvJOM-5F?usp=sharing'
                }},
                { id: '196911151998021005', type: 'ASN', name: 'Bambang Kurniawan, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/12Jrl6nZLQWMaZ5gC-rm_30gqL4DF9xwR?usp=sharing',
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1Ej_hBODJBEfa9hj4VcJ9XYHrh3Vgfu3w?usp=sharing'
                }},
                { id: '196805042005011013', type: 'ASN', name: 'Drs. Damiran', photos: {
                    2022: 'https://drive.google.com/drive/folders/1cfZ82ecHn1wzVzhmbZKq_5wpkxy75xqV?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1aHTzpm5Y71jX74tey6kpd7kVYtdbzk4E?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1gVziRq4xczaHUGy19JfGMufteG0ZduBQ?usp=sharing'
                }},
                { id: '197201232005012004', type: 'ASN', name: 'Nila Hari Kurniawati, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1VKp_NzFclTtwbDuTehqMWd3iAHHKxY6m?usp=sharing',
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1agyXbzm0_8ylGxeUJNXJ7s-ZFWmOCkn5?usp=sharing'
                }},
                { id: '197008222005011009', type: 'ASN', name: 'Gunawan, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1JYzRuDcZDfg5Lu7tn_pvaSF6thpvfGul?usp=sharing'
                }},
                { id: '197110102006042032', type: 'ASN', name: 'Lukie Pamularsih, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1eqCRBl559cxqQjDHE_A39znm9oZisA5W?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1vOFCEnG9TCTsh6GwTpsxukx8PZhH4EV9?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1EyLDLUQtOhN93cET29fB6koEHHV3wYZx?usp=sharing'
                }},
                { id: '197110102006042032', type: 'ASN', name: 'Anang Dwiono, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1eqCRBl559cxqQjDHE_A39znm9oZisA5W?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1vOFCEnG9TCTsh6GwTpsxukx8PZhH4EV9?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1EyLDLUQtOhN93cET29fB6koEHHV3wYZx?usp=sharing'
                }},
                { id: '198603022010012031', type: 'ASN', name: 'Retno Purwanti, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1ISbSlbJKmQoBKj6qWiS_q9hko-br5P9o?usp=sharing'
                }},
                { id: '196801012008012041', type: 'ASN', name: 'Sudarti, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1hSKo5hjqpLgh97tEuaWMfZMCRmOy70oP?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/16OYbwSJlLev5inquL-dvTWi0sQIN6Opw?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/17CxGMVkg47xJmXBDwc-DjAoEfjqvfMaw?usp=sharing'
                }},
                { id: '197303222006042018', type: 'ASN', name: 'Alis Mundiarti, S.Pd.', photos: {
                    2022: null,
                    2023: 'https://drive.google.com/drive/folders/1ad4CR9r_QbwZJ0QYfmxrINMz0BEx-76T?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1lvDnPPjpqS9fIzxXMn5KEi7cUjOtDw1S?usp=sharing'
                }},
                { id: '197510082006041018', type: 'ASN', name: 'Kuswanto, S.Pd.', photos: {
                    2022: null,
                    2023: 'https://drive.google.com/drive/folders/12KKl4sx1FfqJPdBoGeU16ZtSuALj8in_?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1vEzXogG2MHW6zmueNvFXIcQPXOJ8E7eB?usp=sharing'
                }},
                { id: '198703142010012015', type: 'ASN', name: 'Etika Dhewi Rahmawati, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1wDuR5Q0D_YnJ5PEoXZP8r1_xlX09jgEc?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1RAmWli431d8hLXQzZEr7D4DRJlWNxkpj?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1ZsvQM1sHQPCCciJAn0ZDvZmc8uWDwOWh?usp=sharing'
                }},
                { id: '198705172010011006', type: 'ASN', name: 'Alyon Puguh Saputro, S.Si.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1RtU027bRKmAJFTvf0nuJyzYBB8E7W6n3?usp=sharing'
                }},
                { id: '198608182019032007', type: 'ASN', name: 'Mas\'udah, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1Vj3Fd7vHZN3pvV69EuUT8DVKcdETXnHb?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1g3O430xi7f0_f3tHQjYztxEJegbdSktD?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1hnMpc4XCvA1sEgmERvNHIRY5GC91KrkX?usp=sharing'
                }},
                { id: '199603112019032011', type: 'ASN', name: 'Rizka Zakiyya Mufida, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1PerAdIaoDwhneok2zLXjc_hhmqh_FqTb?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1IFCMz76tbeUl9h3DBNHrgNYw5xBhFRfL?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1X-3WpzeQmFJ2k9FAIpTJN0fOsTRzcxRw?usp=sharing'
                }},
                { id: '199709162020122012', type: 'ASN', name: 'Orentha Yayang Arianti, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1zenilIc31UBNTc6V931nY44TCa-r1CX0?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1aO4X2K-fgCyDStx3GcGMl-VBFLmP8m-B?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1qfI9f1V8CSoMBOchefjrO3l_xb06vDS1?usp=sharing'
                }},
                { id: '197511032022212007', type: 'ASN', name: 'Eko Novi Wartiningsih, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1CNJYAwovszGPpG9Gvj0rLpN_Tg6JM1Y7?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1O1xr178hXWAIC_pmDeWbt7JenEKTxnMq?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1XvcdY-rOdUVAAA5-_OPRq4nE4-iZtwZM?usp=sharing'
                }},
                { id: '197607112022211001', type: 'ASN', name: 'Muhamad Arif, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1NWCgBK5wd_Tg_yAysbBxOODI8EqBEXEB?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1U4jRekRKYpdOQejpJb31L3bfbHXZcEDx?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1Z3AewLP5mueuH3C5BQ7t5IUsXk_erTkX?usp=sharing'
                }},
                { id: '199007132022211014', type: 'ASN', name: 'Teguh Wibowo, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1qoRZH9DqpHUb0rkL6eivfujZP9fCWDP4?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1lpEJ8w_zhjWNFqlp3fErqZ3vETW3hYbD?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1x3qYMpjupKVQlUBCbx5YZDwU3WpJ8ygu?usp=sharing'
                }},
                { id: '199307302022211011', type: 'ASN', name: 'Gagah Arif Prawira Dijaya, M.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1GiHg_fzcQ8zaZos3darIXBnQkxqbw7Qa?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1NSfNlRrXeF9M4g-YmaqCJNPQIIoeG3P6?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1if0b9oTQgAvl08mMBqGuS9xzjlzirXmF?usp=sharing'
                }},
                { id: '199310102022212020', type: 'ASN', name: 'Novita Ria Anggraeni, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1GTk4nal_-k_FjPGZxHbIcI1J3tQc7o5P?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1wWeyDQdpz5LbesPzwhQ-4IWq_Bw8LxPc?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1M-SKMBa8uMyN_el8heD2FnTHAhEEm4yK?usp=sharing'
                }},
                { id: '199311142022211010', type: 'ASN', name: 'Fahreza Rakhmad Zatti, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1pfTQdQrnSTUdG7RTzkOfqFaToxf9lNuY?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1RSE2tv24T5sYSgFgmBFXaKOSe3ySFgKo?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1j4z8CUI9GYXiYNGU6uTiY-CmsJnP24IL?usp=sharing'
                }},
                { id: '199403242022212011', type: 'ASN', name: 'Dea Noer Indah Wardani, S.Sos.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1uFxy6TdFWW1DvVms3KlAKEBKqRS6N5UQ?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1OdVHCdXi2COE6imtSJMaU5sRrDn7fjxg?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1Ucd2lvFDphi7XpOsCuzNKILNaitv1q-C?usp=sharing'
                }},
                { id: '199405122022211009', type: 'ASN', name: 'Fery Irawan, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1vPX66RshQdNIGd8w5aMPeyATWUZtGZu7?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1tcqoAYRX9MHvkpZV2aCF6A1t0ugj21cE?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1mCsDDO3tAiobK7HD5A9ZM1u6WDZCcZE5?usp=sharing'
                }},
                { id: '199607282022212006', type: 'ASN', name: 'Ade Nur Maulidia Fachrisya, S.Pd.', photos: {
                    2022: null,
                    2023: 'https://drive.google.com/drive/folders/1djh23kPmIk-mLdl8bVz7CMXAq14dpcgb?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1kVOSFGSTzIWqHwKEdJTKpGVVtKHZC9XI?usp=sharing'
                }},
                { id: '198012022022212013', type: 'ASN', name: 'Desi Dwi Ingkana, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1Et1V5euLk6tEsT4O7DcRf8nk25gIe5ny?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1PR7aR4HVxYh7A_PTsALhnGH4xrzlH61k?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1PCc0ibjyQagl_MLidE03uCRF0qgtBAGU?usp=sharing'
                }},
                { id: '198407292022212028', type: 'ASN', name: 'Dewi Yulia Masruroh, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1koLvCWZ6YB9465o9UTbYECQxq7QDlNDT?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1CmrVgK-Zz5QJFwtQ9ZPMDcsPmIWMIbu-?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1c7rpD_rPMdgnQ3meqPPx4f9conouYUcg?usp=sharing'
                }},
                { id: '199411212022211008', type: 'ASN', name: 'Ahmad Shufi Mumtazzun Ni\'am, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1xiVxc0Kgv9WIXq9DLM9fOLXGMgneBUKJ?usp=sharing',
                    2023: 'https://drive.google.com/drive/folders/1qxfeLUD3kQuaWXKiyiO9twzxuZ6_0x_t?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1HkahN4oKIIon0V7tPIZWn3vfop3E7Kwb?usp=sharing'
                }},
                { id: '198302112022212022', type: 'ASN', name: 'Eva Febriyanti, S.Pd.', photos: {
                    2022: null,
                    2023: 'https://drive.google.com/file/d/1xJ__Rwk_64LN5m5x70xulXpz0j_9FET7/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/19Yju_P67JsEbSDKXmF-qePfwPvT1MqF8?usp=sharing'
                }},
                { id: '197606292023212007', type: 'ASN', name: 'Lusia Selly Yunita, M.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1VwredcLuWoL8TocIexsXMV75fK4-CsgK?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1xXFe2giztB09LtIMpxDte-M2AVV_4cSp/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1sFMRAc_oLEGz5vao6fUVm5dCMvPQCVnl?usp=sharing'
                }},
                { id: '198706242023211014', type: 'ASN', name: 'Tri Mulyanto, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1pi8ZTKJdvp-JBSst5XWhLsTdOgdZNIJd?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1h8uwqG00RvP2FzmJL0_yD4iOL9-hk4kl/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1YfRIKhPaS624EMDMpyWdhSA0ylL0UjKe?usp=sharing'
                }},
                { id: '198711182023212034', type: 'ASN', name: 'Nofa Kristanti, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1PchgNNMf2ISiEazlUsTHhVedMUfRN_xk?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1lGfA25kSlAM15EN-tB9mF39c2vltuzS1/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1AaCwfPQZOHh3MQ8RRRa63jeuwTukHjJa?usp=sharing'
                }},
                { id: '198110102023212029', type: 'ASN', name: 'Yayuk Ernawati, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/198wY2xD-gS1PVH-uUiyzI5pwlJe4h8Pn?usp=sharing'
                }},
                { id: '197007232024211001', type: 'ASN', name: 'Atmika Pratnawihardi, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1UDI_VwL6dU8_n1ed6S2wG08UWHJapYhP?usp=sharing'
                }},
                { id: '198311182024212015', type: 'ASN', name: 'Risa Dwi Novitasari, S.Kom.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1kzxGK8w5leLvxwDX31EpOrRcg5D9QQOn?usp=sharing'
                }},
                { id: '198608252024212004', type: 'ASN', name: 'Anne Irmayanti, S.S.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1ZyqzxMmvq04yL4oIQAksT2PC6PruheTy?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1TpNmOPQcj9GT6k5lXlT4leNmebmVVcqn/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/127BCjcZ-ceoVzbNIPMUklFJBio44TNrE?usp=sharing'
                }},
                { id: '198710102024212014', type: 'ASN', name: 'Umi Kulsum, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1KjKSyB7QH3xWyHEY205UGsYnBqvZxevd?usp=sharing'
                }},
                { id: '198908292024211001', type: 'ASN', name: 'Teguh Bagus Nurcahyo, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1J3jkqlUNHV8tNUDScNlpwiSp6CrQiKqY?usp=sharing'
                }},
                { id: '199105302024212007', type: 'ASN', name: 'Efi Ermayanti, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/19FKPp-vyGFO1adBS8QAfpg9leZ5xxGZk?usp=sharing'
                }},
                { id: '199209082024212052', type: 'ASN', name: 'Siva Maulidya, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1QlwAfFP5oy40Wg0PpVnF2uEntaVdGFYj?usp=sharing'
                }},
                { id: '199308022024212053', type: 'ASN', name: 'Ifanatun Nadhiroh, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1Z2N4WGwe2jGfh0Y5wh21waQ0sfj7aOVj?usp=sharing'
                }},
                { id: '199404252024212009', type: 'ASN', name: 'Defi Purwantiyas, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1KTwcST_O_nPiwhEp25exX-sQQjiPIJuM?usp=sharing'
                }},
                { id: '199407132024211005', type: 'ASN', name: 'Santoso Ilham, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1PRispDqaqZ75MFz501X0wl2WeeGtyGQU?usp=sharing',
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1e2jjLqBEbVN-NJ2nP4ZXuHrZqi1jyZUG?usp=sharing'
                }},
                { id: '199603162024212059', type: 'ASN', name: 'Marita Dwi Utami, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1HgUIi8g0CsN6lRhrZRMdSfxclU9z8DKx?usp=sharing'
                }},
                { id: '199607282024211020', type: 'ASN', name: 'Rocki Avianto Muhamat, S.Si.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1QMmWSHOhyJU9EDKA7AX4gqs6yARfS4hL?usp=sharing'
                }},
                { id: '2051773755', type: 'Honorer', name: 'Suwono, A.Md.', photos: {
                    2022: 'https://drive.google.com/drive/folders/17i-82qvoxNjbD1OygAfkvvobx8tfNeE8?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1z8fScbH0NmtyzOWK-vmTbVeGYkst_ZO6/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1PKOajvihTlOEhLPlUmqN7nS7QoJjsOQC?usp=sharing'
                }},
                { id: '2051773756', type: 'Honorer', name: 'Alfiyah, M.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1gT4vDCFBucyNOYEsfkCpaB8nhbpILpAk?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1Pci2nKeq_8U4xKLABz-OSaEsDcLXejEI/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1kIlFYavLqEEVJOSiQW2OeRa1izYjjHg1?usp=sharing'
                }},
                { id: '2051773758', type: 'Honorer', name: 'Muh. Rizal Prasetya Mulyadi, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1dDB_8OqzN1iSRnrMQCt7y8IUp2shaFko?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1FrP3f03izNaZYzAJTyfBBqCcPNmcX6Wk/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1l265JhhV4oYhYmNJbosW6GPuocNktpj-?usp=sharing'
                }},
                { id: '2051773759', type: 'Honorer', name: 'Nur Hamid, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1mYa8cCEdSasa9qKSJBiJtZ0li4eRyVzF?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1-Hp3AGR8W3LgB9e92hqxx0hu_2LIp6DU/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1HjRqAC9xw7w_6F8g9nl34QX1BatWL_M2?usp=sharing'
                }},
                { id: '2051773760', type: 'Honorer', name: 'Ratna Purwaningsih, M.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/13UyxEaXgxKxKYXUjRCOs-LDbZ_WbQNqH?usp=sharing'
                }},
                { id: '2051773761', type: 'Honorer', name: 'Carissa Nanda Wahyu Faatihah, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/10uSlxlNRCCJ8yZDC4V1rEestsApB4g9Y?usp=sharing'
                }},
                { id: '2051773762', type: 'Honorer', name: 'Muhammad Bayu Aji Putra Harianto, S.S.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1Cn9ryWx0npQ385fsryKQQrEMmpBmCuMH?usp=sharing'
                }},
                { id: '2051773763', type: 'Honorer', name: 'Dinta Melina, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: null
                }},
                { id: '2051773763', type: 'Honorer', name: 'Dinta Melina, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1mI3X9shg1n37_7cRDaggieOuqZljiUTo?usp=sharing'
                }},
                { id: '2051773764', type: 'Honorer', name: 'Trisabella Febriana Maharani, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/18lsXoZnbNN1bqkzyeytNcTKc-efH5Fdp?usp=sharing'
                }},
                { id: '196507082008012011', type: 'ASN', name: 'Ikaeksi Mudjihastuti, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1HCzlHrYHWbYtE49oOI3PvmUSRkhUm3xO?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1u9CvGxH0mo3O20NW1Mok4ksDiBBULSQT/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1RJHkYSxabWNajRxwytaLxoEBsXslF-mU?usp=sharing'
                }},
                { id: '196711071988031004', type: 'ASN', name: 'Imam Suliyadi, S.Pd.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1TkOnhB6xZAzUo2wTBbaz1TokH5BftRye?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1va9X10YGdwpaZzJNyFiUlUPPTCsybkaX/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1Jb2ozeGoxE4tzTLCdzGZC4X-Bszp2NA4?usp=sharing'
                }},
                { id: '198603122014082004', type: 'ASN', name: 'Merina Martin', photos: {
                    2022: 'https://drive.google.com/drive/folders/1cPmfs4M_jooZmdnnpg5fI_97NxJaSmeX?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1wmeyQxbzi-ma39t_EJzgu4ITZckexHJe/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1wO5hl87Hq7IG8u4y9K4g9FgrV4Fnuv4J?usp=sharing'
                }},
                { id: '2051773769', type: 'Honorer', name: 'Muhamad Soleh', photos: {
                    2022: 'https://drive.google.com/drive/folders/1WG1xqmUOEvAMwBkryAoTKNi_PjRqYjQ0?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1jcX-V8h8n5Huw3s4hkovdcgmr2F-O7yB/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/14-0RH-vgJC3Z41BCtUrHn0C2Y9x2dfh6?usp=sharing'
                }},
                { id: '2051773770', type: 'Honorer', name: 'Sidem Ana Winarti', photos: {
                    2022: 'https://drive.google.com/drive/folders/1M4OWnKC2_82hl5vrxO-QnbcM5UVy7LV_?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1YPJ5NU82GQOm6c-PJfsLRm1PpcSjOEzb/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1xGueMWBtNotGXoVfDbVEJQw3CAGqljCP?usp=sharing'
                }},
                { id: '2051773771', type: 'Honorer', name: 'Purwadi', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1SIiUpN4ewDMlZaN5s8LNT5b_K1VUXQYI?usp=sharing'
                }},
                { id: '2051773772', type: 'Honorer', name: 'Marlalita Amarilis', photos: {
                    2022: null,
                    2023: 'https://drive.google.com/file/d/1TFO6kR4aDnMbcPWYq5-BeebvwWT-UGfj/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1l_WB3IIpIdx5l9DHbp-4OymOWoUxwdNU?usp=sharing'
                }},
                { id: '2051773773', type: 'Honorer', name: 'Nur Wahyudin', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1OehV_tNnuG_H-kMUacu4PqooQ_HebSOQ?usp=sharing'
                }},
                { id: '2051773774', type: 'Honorer', name: 'Agus Aji Setyawan', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1PXOQQ0LV1ArOdsEr3r4TFQd83plxyRLH?usp=sharing'
                }},
                { id: '2051773775', type: 'Honorer', name: 'Kuswinarsih', photos: {
                    2022: 'https://drive.google.com/drive/folders/1kLyEsLWGZZ7pmqlSBcQIEFZMhfw-Exzd?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1WGjbOYcRo7I8ibefRpThA6qGSVLLLoqo/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1cF2AaNPSvYD2a55ipyNIvDO55UdOdtiA?usp=sharing'
                }},
                { id: '2051773776', type: 'Honorer', name: 'Devi Ayu Ratnasari, S.T.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1EnmFUyTyhGc0B5JtA3JEikZFi3ZvCT55?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1pYTfwAqNjUogZ1Oq4zq_zbb7yQBUfti9/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/18cxYJMI9BfJGQpfqFDNoAf464CcIk-64?usp=sharing'
                }},
                { id: '2051773777', type: 'Honorer', name: 'Dini Kartika Kumalasari, S.Sos.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1vCAHyB3KuKmSRkoNzOWAnbfTA2PZYD45?usp=sharing',
                    2023: 'https://drive.google.com/file/d/143Ie0slcX0gcFBS8dgRu6D2QTWDsgsK1/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1h-t8Pdgo1lHeSVt74eYVUywO_7M2-lNS?usp=sharing'
                }},
                { id: '2051773778', type: 'Honorer', name: 'Whinny Qori Fatima, S.Ak.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1BqHrxxvEDUYCnt8wqZWgE44DRnWBBpz5?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1wWx5fBRG_-R5c2TuKwW2KvoFbMq-lGGr/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/190TG4awPxj3N67k7Z8F-C8W7fPr6T6Go?usp=sharing'
                }},
                { id: '2051773779', type: 'Honorer', name: 'Silfia Dwi Linggani', photos: {
                    2022: 'https://drive.google.com/drive/folders/1UbtA28dBx5PYSnXNb8zZIQu7O9auDsm-?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1I8r8vc27VpFeArxaVkYfX19Qqbg8VfHT/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1TdOF6_yfJlC-z-44n7wc4DCwZyCNcskf?usp=sharing'
                }},
                { id: '2051773780', type: 'Honorer', name: 'Miranda Putri Hutami, A.Md.Kep', photos: {
                    2022: 'https://drive.google.com/drive/folders/1iwv8xWBoT5xWZoqbtDKqaq544iauGfT4?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1OXzJym_0KDDv8gb4mJAHjlgwO3MLDknb/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/104-zcR7Bv_A686WwT56z38Vm520xkSe1?usp=sharing'
                }},
                { id: '2051773781', type: 'Honorer', name: 'Dino Heria, S.E.', photos: {
                    2022: 'https://drive.google.com/drive/folders/1NysFlEX_3t2mdP7OGcLTdZIEr5X-wnA0?usp=sharing',
                    2023: 'https://drive.google.com/file/d/1gAT-w14J_p2tRz5BP0OoIqj3LL33lE4c/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1dSi_GlA2-rEoG3jH9WHhs266Ld-eR_zu?usp=sharing'
                }},
                { id: '2051773782', type: 'Honorer', name: 'Lelita Andardini', photos: {
                    2022: null,
                    2023: 'https://drive.google.com/file/d/1IUjBO8HO70eF2iopfKHPh1t_wtekraal/view?usp=sharing',
                    2025: 'https://drive.google.com/drive/folders/1_q9UDO_Ba2lnpV7jMA6s85D1ZGwmKsFG?usp=sharing'
                }},
                { id: '2051773783', type: 'Honorer', name: 'Ali Mustofa, S.Ikom.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1taZWezD5q6E-Q_d1kB6praFNdWtKE8VK?usp=sharing'
                }},
                { id: '2051773784', type: 'Honorer', name: 'Imam Mukhlisin', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1Cnj1udgrSo3FtLzbAv_EjQfJrjGcqTb_?usp=sharing'
                }},
                { id: '2051773785', type: 'Honorer', name: 'Sulistiyono', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/14gsy1Cdqf1X1Dr9J0TylprRMiVTgB7pP?usp=sharing'
                }},
                { id: '2051773786', type: 'Honorer', name: 'Ari Wibowo, S.Pd.', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1lHoJdt8rJE6YLfzeD15SynXkhTaR7J_E?usp=sharing'
                }},
                { id: '2051773787', type: 'Honorer', name: 'Rizki Isnaini', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1v5meNURQEXrlLLA2sZJiLzlgc66oLkUu?usp=sharing'
                }},
                { id: '2051773788', type: 'Honorer', name: 'Kalila Pavita Augie C', photos: {
                    2022: null,
                    2023: null,
                    2025: 'https://drive.google.com/drive/folders/1nQUsbSAtzlwQJesmIx_K4gwOH3ZMrdQz?usp=sharing'
                }},
            ];
            
            let currentTeacher = null;

            // --- DOM Elements ---
            const instructionCard = document.getElementById('instruction-card');
            const closeInstructionBtn = document.getElementById('close-instruction-btn');
            const searchFormContainer = document.getElementById('search-form-container');
            const searchForm = document.getElementById('search-form');
            const teacherTypeRadios = document.querySelectorAll('input[name="teacher_type"]');
            const teacherIdInput = document.getElementById('teacher-id');
            const teacherIdLabel = document.getElementById('teacher-id-label');
            const errorMessage = document.getElementById('error-message');
            const searchView = document.getElementById('search-view');
            const resultsView = document.getElementById('results-view');
            const teacherNameEl = document.getElementById('teacher-name');
            const backToSearchBtn = document.getElementById('back-to-search');
            const photoButtons = document.querySelectorAll('.photo-btn');
            const folderMessage = document.getElementById('folder-message');
            
            // --- Instruction Card Logic ---
            if(closeInstructionBtn && instructionCard) {
                closeInstructionBtn.addEventListener('click', () => {
                    instructionCard.style.opacity = '0';
                    setTimeout(() => {
                         instructionCard.style.display = 'none';
                         if (searchFormContainer) {
                             searchFormContainer.classList.remove('hidden');
                             searchFormContainer.classList.add('fade-in');
                         }
                    }, 300); // Match transition duration
                });
            }

            // --- Form Logic ---
            teacherTypeRadios.forEach(radio => {
                radio.addEventListener('change', (e) => {
                    if (e.target.value === 'ASN') {
                        teacherIdLabel.textContent = "Nomor Induk Pegawai";
                        teacherIdInput.placeholder = "contoh: 19700827200501xxxx";
                    } else {
                        teacherIdLabel.textContent = "Nomor Induk Tenaga Honorer";
                        teacherIdInput.placeholder = "contoh: 20517737xx";
                    }
                    teacherIdInput.value = '';
                });
            });

            searchForm.addEventListener('submit', (e) => {
                e.preventDefault();
                errorMessage.textContent = '';
                folderMessage.textContent = '';
                const id = teacherIdInput.value.trim();
                const type = document.querySelector('input[name="teacher_type"]:checked').value;

                const foundTeacher = teachers.find(t => t.id === id && t.type === type);
                
                if (foundTeacher) {
                    currentTeacher = foundTeacher;
                    teacherNameEl.textContent = currentTeacher.name;
                    searchView.classList.add('hidden');
                    resultsView.classList.remove('hidden');
                } else {
                    errorMessage.textContent = 'GTK tidak ditemukan. Silakan periksa Nomor Pegawai dan tipe GTK.';
                    teacherIdInput.classList.add('border-red-500');
                    setTimeout(() => teacherIdInput.classList.remove('border-red-500'), 2000)
                }
            });

            // --- Results Logic ---
            backToSearchBtn.addEventListener('click', () => {
                resultsView.classList.add('hidden');
                searchView.classList.remove('hidden');
                
                // Reset form and show instruction card again
                if (instructionCard) {
                    instructionCard.style.display = 'block';
                    setTimeout(()=> instructionCard.style.opacity = '1', 10);
                }
                if (searchFormContainer) {
                    searchFormContainer.classList.add('hidden');
                    searchFormContainer.classList.remove('fade-in');
                }

                searchForm.reset();
                document.getElementById('asn').checked = true;
                document.getElementById('asn').dispatchEvent(new Event('change'));
                errorMessage.textContent = '';
                folderMessage.textContent = '';
                currentTeacher = null;
            });

            photoButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const year = button.dataset.year;
                    folderMessage.textContent = '';

                    if (currentTeacher && currentTeacher.photos && currentTeacher.photos[year]) {
                        window.open(currentTeacher.photos[year], '_blank');
                    } else {
                        folderMessage.textContent = 'Folder tidak ada. Silakan hubungi admin sistem.';
                    }
                });
            });
        });