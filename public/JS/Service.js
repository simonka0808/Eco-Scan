let array = []; //array that will store all elements 
let totalRecords = 0; //the length of array
let totalPages = 0; //number of the pages based on the total number of elements
let displayRecords = []; //an array that will store the elements that have to be shown
let recPerPage = 5; //fixed umber of elements to be shown per page;
let _this = "";
dumy = {
  "total": 744,
  "itemsShown": 40,
  "filters": [
      {
          "id": "sizes",
          "name": "Size",
          "group": [
              {
                  "id": "womenswear",
                  "name": "Womenswear",
                  "filtervalues": [
                      {
                          "name": "4",
                          "id": "1541womenswear",
                          "filtercount": 171,
                          "code": "15_4_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "6",
                          "id": "2161womenswear",
                          "filtercount": 209,
                          "code": "21_6_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "8",
                          "id": "2781womenswear",
                          "filtercount": 191,
                          "code": "27_8_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "10",
                          "id": "31101womenswear",
                          "filtercount": 182,
                          "code": "31_10_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "12",
                          "id": "35121womenswear",
                          "filtercount": 170,
                          "code": "35_12_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "14",
                          "id": "39141womenswear",
                          "filtercount": 161,
                          "code": "39_14_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "16",
                          "id": "45161womenswear",
                          "filtercount": 194,
                          "code": "45_16_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "18",
                          "id": "50181womenswear",
                          "filtercount": 222,
                          "code": "50_18_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "20",
                          "id": "54201womenswear",
                          "filtercount": 202,
                          "code": "54_20_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "22",
                          "id": "59221womenswear",
                          "filtercount": 223,
                          "code": "59_22_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "24",
                          "id": "65241womenswear",
                          "filtercount": 41,
                          "code": "65_24_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "26",
                          "id": "70261womenswear",
                          "filtercount": 38,
                          "code": "70_26_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "28",
                          "id": "76281womenswear",
                          "filtercount": 36,
                          "code": "76_28_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "29",
                          "id": "79291womenswear",
                          "filtercount": 1,
                          "code": "79_29_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "30",
                          "id": "82301womenswear",
                          "filtercount": 36,
                          "code": "82_30_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "32",
                          "id": "88321womenswear",
                          "filtercount": 2,
                          "code": "88_32_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "4p",
                          "id": "3244p1womenswear",
                          "filtercount": 31,
                          "code": "324_4p_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "6p",
                          "id": "3256p1womenswear",
                          "filtercount": 22,
                          "code": "325_6p_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "8p",
                          "id": "3268p1womenswear",
                          "filtercount": 15,
                          "code": "326_8p_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "10p",
                          "id": "32710p1womenswear",
                          "filtercount": 13,
                          "code": "327_10p_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "12p",
                          "id": "32812p1womenswear",
                          "filtercount": 11,
                          "code": "328_12p_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "14p",
                          "id": "32914p1womenswear",
                          "filtercount": 12,
                          "code": "329_14p_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "16p",
                          "id": "33016p1womenswear",
                          "filtercount": 17,
                          "code": "330_16p_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "18p",
                          "id": "33118p1womenswear",
                          "filtercount": 17,
                          "code": "331_18p_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "20p",
                          "id": "33220p1womenswear",
                          "filtercount": 18,
                          "code": "332_20p_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "22p",
                          "id": "33322p1womenswear",
                          "filtercount": 20,
                          "code": "333_22p_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "24p",
                          "id": "33424p1womenswear",
                          "filtercount": 7,
                          "code": "334_24p_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "xs",
                          "id": "363xs1womenswear",
                          "filtercount": 16,
                          "code": "363_xs_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "s",
                          "id": "366s1womenswear",
                          "filtercount": 33,
                          "code": "366_s_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "m",
                          "id": "369m1womenswear",
                          "filtercount": 26,
                          "code": "369_m_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "l",
                          "id": "370l1womenswear",
                          "filtercount": 36,
                          "code": "370_l_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "xl",
                          "id": "372xl1womenswear",
                          "filtercount": 37,
                          "code": "372_xl_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "xxl",
                          "id": "375xxl1womenswear",
                          "filtercount": 44,
                          "code": "375_xxl_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "2xl",
                          "id": "3762xl1womenswear",
                          "filtercount": 5,
                          "code": "376_2xl_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "3xl",
                          "id": "3813xl1womenswear",
                          "filtercount": 18,
                          "code": "381_3xl_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "4xl",
                          "id": "3844xl1womenswear",
                          "filtercount": 20,
                          "code": "384_4xl_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "xs/p",
                          "id": "390xsp1womenswear",
                          "filtercount": 4,
                          "code": "390_xs%2Fp_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "s/p",
                          "id": "391sp1womenswear",
                          "filtercount": 1,
                          "code": "391_s%2Fp_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "l/p",
                          "id": "393lp1womenswear",
                          "filtercount": 6,
                          "code": "393_l%2Fp_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "xl/p",
                          "id": "394xlp1womenswear",
                          "filtercount": 2,
                          "code": "394_xl%2Fp_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "xxl/p",
                          "id": "395xxlp1womenswear",
                          "filtercount": 10,
                          "code": "395_xxl%2Fp_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "3xl/p",
                          "id": "3973xlp1womenswear",
                          "filtercount": 2,
                          "code": "397_3xl%2Fp_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "4xl/p",
                          "id": "3984xlp1womenswear",
                          "filtercount": 2,
                          "code": "398_4xl%2Fp_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "20/22",
                          "id": "136420221womenswear",
                          "filtercount": 1,
                          "code": "1364_20%2F22_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "24/26",
                          "id": "136924261womenswear",
                          "filtercount": 1,
                          "code": "1369_24%2F26_1_womenswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "32/34",
                          "id": "141532341womenswear",
                          "filtercount": 1,
                          "code": "1415_32%2F34_1_womenswear",
                          "selected": false,
                          "disabled": false
                      }
                  ]
              },
              {
                  "id": "menswear",
                  "name": "Menswear",
                  "filtervalues": [
                      {
                          "name": "xs",
                          "id": "363xs3menswear",
                          "filtercount": 18,
                          "code": "363_xs_3_menswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "s",
                          "id": "366s3menswear",
                          "filtercount": 14,
                          "code": "366_s_3_menswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "m",
                          "id": "369m3menswear",
                          "filtercount": 13,
                          "code": "369_m_3_menswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "l",
                          "id": "370l3menswear",
                          "filtercount": 11,
                          "code": "370_l_3_menswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "xl",
                          "id": "372xl3menswear",
                          "filtercount": 11,
                          "code": "372_xl_3_menswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "xxl",
                          "id": "375xxl3menswear",
                          "filtercount": 6,
                          "code": "375_xxl_3_menswear",
                          "selected": false,
                          "disabled": false
                      }
                  ]
              },
              {
                  "id": "kidswear",
                  "name": "Kidswear",
                  "filtervalues": [
                      {
                          "name": "4m",
                          "id": "17084m4kidswear",
                          "filtercount": 22,
                          "code": "1708_4m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "5m",
                          "id": "17095m4kidswear",
                          "filtercount": 22,
                          "code": "1709_5m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "6m",
                          "id": "17106m4kidswear",
                          "filtercount": 25,
                          "code": "1710_6m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "7m",
                          "id": "17117m4kidswear",
                          "filtercount": 24,
                          "code": "1711_7m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "8m",
                          "id": "17128m4kidswear",
                          "filtercount": 24,
                          "code": "1712_8m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "9m",
                          "id": "17139m4kidswear",
                          "filtercount": 25,
                          "code": "1713_9m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "10m",
                          "id": "171410m4kidswear",
                          "filtercount": 24,
                          "code": "1714_10m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "11m",
                          "id": "171511m4kidswear",
                          "filtercount": 24,
                          "code": "1715_11m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "12m",
                          "id": "171612m4kidswear",
                          "filtercount": 24,
                          "code": "1716_12m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "13m",
                          "id": "171813m4kidswear",
                          "filtercount": 22,
                          "code": "1718_13m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "14m",
                          "id": "171914m4kidswear",
                          "filtercount": 22,
                          "code": "1719_14m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "15m",
                          "id": "172015m4kidswear",
                          "filtercount": 22,
                          "code": "1720_15m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "16m",
                          "id": "172116m4kidswear",
                          "filtercount": 22,
                          "code": "1721_16m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "17m",
                          "id": "172217m4kidswear",
                          "filtercount": 22,
                          "code": "1722_17m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "18m",
                          "id": "172318m4kidswear",
                          "filtercount": 22,
                          "code": "1723_18m_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "1y",
                          "id": "17241y4kidswear",
                          "filtercount": 80,
                          "code": "1724_1y_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "2y",
                          "id": "17252y4kidswear",
                          "filtercount": 85,
                          "code": "1725_2y_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "3y",
                          "id": "17263y4kidswear",
                          "filtercount": 78,
                          "code": "1726_3y_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "4y",
                          "id": "17274y4kidswear",
                          "filtercount": 69,
                          "code": "1727_4y_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "5y",
                          "id": "17285y4kidswear",
                          "filtercount": 44,
                          "code": "1728_5y_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "6y",
                          "id": "17296y4kidswear",
                          "filtercount": 47,
                          "code": "1729_6y_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "7y",
                          "id": "17307y4kidswear",
                          "filtercount": 46,
                          "code": "1730_7y_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "8y",
                          "id": "17318y4kidswear",
                          "filtercount": 104,
                          "code": "1731_8y_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "9y",
                          "id": "17329y4kidswear",
                          "filtercount": 102,
                          "code": "1732_9y_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "10y",
                          "id": "173310y4kidswear",
                          "filtercount": 104,
                          "code": "1733_10y_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "11y",
                          "id": "173411y4kidswear",
                          "filtercount": 68,
                          "code": "1734_11y_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "12y",
                          "id": "173512y4kidswear",
                          "filtercount": 71,
                          "code": "1735_12y_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "13y",
                          "id": "173613y4kidswear",
                          "filtercount": 68,
                          "code": "1736_13y_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "14y",
                          "id": "173714y4kidswear",
                          "filtercount": 59,
                          "code": "1737_14y_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "14y+",
                          "id": "174014y4kidswear",
                          "filtercount": 58,
                          "code": "1740_14y%2B_4_kidswear",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "14y+x",
                          "id": "177614yx4kidswear",
                          "filtercount": 1,
                          "code": "1776_14y%2Bx_4_kidswear",
                          "selected": false,
                          "disabled": false
                      }
                  ]
              },
              {
                  "id": "waist_inches",
                  "name": "Waist (inches)",
                  "filtervalues": [
                      {
                          "name": "24",
                          "id": "65245waist",
                          "filtercount": 6,
                          "code": "65_24_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "25",
                          "id": "67255waist",
                          "filtercount": 3,
                          "code": "67_25_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "26",
                          "id": "70265waist",
                          "filtercount": 4,
                          "code": "70_26_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "27",
                          "id": "73275waist",
                          "filtercount": 5,
                          "code": "73_27_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "28",
                          "id": "76285waist",
                          "filtercount": 43,
                          "code": "76_28_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "29",
                          "id": "79295waist",
                          "filtercount": 53,
                          "code": "79_29_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "30",
                          "id": "82305waist",
                          "filtercount": 70,
                          "code": "82_30_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "31",
                          "id": "85315waist",
                          "filtercount": 67,
                          "code": "85_31_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "32",
                          "id": "88325waist",
                          "filtercount": 69,
                          "code": "88_32_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "33",
                          "id": "91335waist",
                          "filtercount": 69,
                          "code": "91_33_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "34",
                          "id": "94345waist",
                          "filtercount": 68,
                          "code": "94_34_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "36",
                          "id": "101365waist",
                          "filtercount": 68,
                          "code": "101_36_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "38",
                          "id": "106385waist",
                          "filtercount": 49,
                          "code": "106_38_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "40",
                          "id": "111405waist",
                          "filtercount": 42,
                          "code": "111_40_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "25/30",
                          "id": "137625305waist",
                          "filtercount": 1,
                          "code": "1376_25%2F30_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "26/32",
                          "id": "138226325waist",
                          "filtercount": 1,
                          "code": "1382_26%2F32_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "27/30",
                          "id": "138627305waist",
                          "filtercount": 2,
                          "code": "1386_27%2F30_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "27/32",
                          "id": "138727325waist",
                          "filtercount": 1,
                          "code": "1387_27%2F32_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "28/32",
                          "id": "139228325waist",
                          "filtercount": 36,
                          "code": "1392_28%2F32_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "29/30",
                          "id": "139629305waist",
                          "filtercount": 24,
                          "code": "1396_29%2F30_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "30/30",
                          "id": "140130305waist",
                          "filtercount": 36,
                          "code": "1401_30%2F30_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "30/32",
                          "id": "140230325waist",
                          "filtercount": 56,
                          "code": "1402_30%2F32_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "30/34",
                          "id": "140330345waist",
                          "filtercount": 18,
                          "code": "1403_30%2F34_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "31/30",
                          "id": "140731305waist",
                          "filtercount": 29,
                          "code": "1407_31%2F30_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "31/32",
                          "id": "140831325waist",
                          "filtercount": 60,
                          "code": "1408_31%2F32_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "32/30",
                          "id": "141332305waist",
                          "filtercount": 33,
                          "code": "1413_32%2F30_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "32/32",
                          "id": "141432325waist",
                          "filtercount": 64,
                          "code": "1414_32%2F32_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "32/34",
                          "id": "141532345waist",
                          "filtercount": 16,
                          "code": "1415_32%2F34_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "33/30",
                          "id": "141933305waist",
                          "filtercount": 20,
                          "code": "1419_33%2F30_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "33/32",
                          "id": "142033325waist",
                          "filtercount": 63,
                          "code": "1420_33%2F32_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "33/34",
                          "id": "142133345waist",
                          "filtercount": 25,
                          "code": "1421_33%2F34_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "34/30",
                          "id": "142534305waist",
                          "filtercount": 22,
                          "code": "1425_34%2F30_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "34/32",
                          "id": "142634325waist",
                          "filtercount": 59,
                          "code": "1426_34%2F32_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "34/34",
                          "id": "142734345waist",
                          "filtercount": 25,
                          "code": "1427_34%2F34_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "36/30",
                          "id": "143136305waist",
                          "filtercount": 21,
                          "code": "1431_36%2F30_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "36/32",
                          "id": "143236325waist",
                          "filtercount": 64,
                          "code": "1432_36%2F32_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "36/34",
                          "id": "143336345waist",
                          "filtercount": 23,
                          "code": "1433_36%2F34_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "38/32",
                          "id": "143738325waist",
                          "filtercount": 47,
                          "code": "1437_38%2F32_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "38/34",
                          "id": "143838345waist",
                          "filtercount": 17,
                          "code": "1438_38%2F34_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "40/32",
                          "id": "144340325waist",
                          "filtercount": 42,
                          "code": "1443_40%2F32_5_waist",
                          "selected": false,
                          "disabled": false
                      },
                      {
                          "name": "40/34",
                          "id": "144440345waist",
                          "filtercount": 1,
                          "code": "1444_40%2F34_5_waist",
                          "selected": false,
                          "disabled": false
                      }
                  ]
              }
          ]
      },
      {
          "id": "colorWithNames",
          "name": "Colour",
          "filtervalues": [
              {
                  "name": "Beige",
                  "id": "beigef5f5dc",
                  "color": "f5f5dc",
                  "filtercount": 5,
                  "code": "beige_f5f5dc",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Black",
                  "id": "black000000",
                  "color": "000000",
                  "filtercount": 162,
                  "code": "black_000000",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Blue",
                  "id": "blue0000ff",
                  "color": "0000ff",
                  "filtercount": 473,
                  "code": "blue_0000ff",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Green",
                  "id": "green008000",
                  "color": "008000",
                  "filtercount": 4,
                  "code": "green_008000",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Grey",
                  "id": "grey808080",
                  "color": "808080",
                  "filtercount": 84,
                  "code": "grey_808080",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Multi",
                  "id": "multi000000",
                  "color": "000000",
                  "filtercount": 18,
                  "code": "multi_000000",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Orange",
                  "id": "orangeffa500",
                  "color": "ffa500",
                  "filtercount": 2,
                  "code": "orange_ffa500",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Pink",
                  "id": "pinkffc0cb",
                  "color": "ffc0cb",
                  "filtercount": 5,
                  "code": "pink_ffc0cb",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Purple",
                  "id": "purple800080",
                  "color": "800080",
                  "filtercount": 1,
                  "code": "purple_800080",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Red",
                  "id": "redff0000",
                  "color": "ff0000",
                  "filtercount": 1,
                  "code": "red_ff0000",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Turquoise",
                  "id": "turquoise40e0d0",
                  "color": "40e0d0",
                  "filtercount": 1,
                  "code": "turquoise_40e0d0",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "White",
                  "id": "whiteffffff",
                  "color": "ffffff",
                  "filtercount": 25,
                  "code": "white_ffffff",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Yellow",
                  "id": "yellowffff00",
                  "color": "ffff00",
                  "filtercount": 6,
                  "code": "yellow_ffff00",
                  "selected": false,
                  "disabled": false
              }
          ]
      },
      {
          "id": "patterns",
          "name": "Pattern",
          "filtervalues": [
              {
                  "name": "patterned",
                  "id": "patterned",
                  "filtercount": 7,
                  "code": "patterned",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "solid colour",
                  "id": "solidcolour",
                  "filtercount": 654,
                  "code": "solid+colour",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "spotted",
                  "id": "spotted",
                  "filtercount": 3,
                  "code": "spotted",
                  "selected": false,
                  "disabled": false
              }
          ]
      },
      {
          "id": "productTypes",
          "name": "Product Type",
          "filtervalues": [
              {
                  "name": "Jeans",
                  "id": "jeans",
                  "filtercount": 725,
                  "code": "Jeans",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "T-shirt",
                  "id": "t-shirt",
                  "filtercount": 1,
                  "code": "T-shirt",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Top",
                  "id": "top",
                  "filtercount": 4,
                  "code": "Top",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Trousers",
                  "id": "trousers",
                  "filtercount": 14,
                  "code": "Trousers",
                  "selected": false,
                  "disabled": false
              }
          ]
      },
      {
          "id": "clothingStyles",
          "name": "Style",
          "filtervalues": [
              {
                  "name": "Balloon leg",
                  "id": "balloonleg",
                  "filtercount": 5,
                  "code": "Balloon+leg",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Biker",
                  "id": "biker",
                  "filtercount": 4,
                  "code": "Biker",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Bootcut",
                  "id": "bootcut",
                  "filtercount": 10,
                  "code": "Bootcut",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Boyfriend",
                  "id": "boyfriend",
                  "filtercount": 3,
                  "code": "Boyfriend",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Cargo",
                  "id": "cargo",
                  "filtercount": 3,
                  "code": "Cargo",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Culottes",
                  "id": "culottes",
                  "filtercount": 3,
                  "code": "Culottes",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Dungarees",
                  "id": "dungarees",
                  "filtercount": 3,
                  "code": "Dungarees",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Flared",
                  "id": "flared",
                  "filtercount": 3,
                  "code": "Flared",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Girlfriend",
                  "id": "girlfriend",
                  "filtercount": 7,
                  "code": "Girlfriend",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Hoodie",
                  "id": "hoodie",
                  "filtercount": 1,
                  "code": "Hoodie",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Joggers",
                  "id": "joggers",
                  "filtercount": 22,
                  "code": "Joggers",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Mom",
                  "id": "mom",
                  "filtercount": 77,
                  "code": "Mom",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Paper bag",
                  "id": "paperbag",
                  "filtercount": 6,
                  "code": "Paper+bag",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Straight leg",
                  "id": "straightleg",
                  "filtercount": 125,
                  "code": "Straight+leg",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Sweatshirt",
                  "id": "sweatshirt",
                  "filtercount": 2,
                  "code": "Sweatshirt",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Tapered",
                  "id": "tapered",
                  "filtercount": 117,
                  "code": "Tapered",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Trashed",
                  "id": "trashed",
                  "filtercount": 37,
                  "code": "Trashed",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Wide",
                  "id": "wide",
                  "filtercount": 43,
                  "code": "Wide",
                  "selected": false,
                  "disabled": false
              }
          ]
      },
      {
          "id": "necklineStyles",
          "name": "Neckline",
          "filtervalues": [
              {
                  "name": "Crew-neck",
                  "id": "crew-neck",
                  "filtercount": 2,
                  "code": "Crew-neck",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Round neck",
                  "id": "roundneck",
                  "filtercount": 2,
                  "code": "Round+neck",
                  "selected": false,
                  "disabled": false
              }
          ]
      },
      {
          "id": "sleeveLengths",
          "name": "  Sleeve Length",
          "filtervalues": [
              {
                  "name": "Long sleeve",
                  "id": "longsleeve",
                  "filtercount": 4,
                  "code": "Long+sleeve",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Short sleeve",
                  "id": "shortsleeve",
                  "filtercount": 1,
                  "code": "Short+sleeve",
                  "selected": false,
                  "disabled": false
              }
          ]
      },
      {
          "id": "waistRises",
          "name": "Waist Rise",
          "filtervalues": [
              {
                  "name": "High waist",
                  "id": "highwaist",
                  "filtercount": 351,
                  "code": "High+waist",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Low waist",
                  "id": "lowwaist",
                  "filtercount": 20,
                  "code": "Low+waist",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Regular waist",
                  "id": "regularwaist",
                  "filtercount": 157,
                  "code": "Regular+waist",
                  "selected": false,
                  "disabled": false
              }
          ]
      },
      {
          "id": "garmentLengths",
          "name": "Length",
          "filtervalues": [
              {
                  "name": "Ankle length",
                  "id": "anklelength",
                  "filtercount": 281,
                  "code": "Ankle+length",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Long",
                  "id": "long",
                  "filtercount": 438,
                  "code": "Long",
                  "selected": false,
                  "disabled": false
              }
          ]
      },
      {
          "id": "fits",
          "name": "Fit",
          "filtervalues": [
              {
                  "name": "Loose fit",
                  "id": "loosefit",
                  "filtercount": 53,
                  "code": "Loose+fit",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Oversized",
                  "id": "oversized",
                  "filtercount": 4,
                  "code": "Oversized",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Regular fit",
                  "id": "regularfit",
                  "filtercount": 42,
                  "code": "Regular+fit",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Relaxed fit",
                  "id": "relaxedfit",
                  "filtercount": 40,
                  "code": "Relaxed+fit",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Skinny fit",
                  "id": "skinnyfit",
                  "filtercount": 237,
                  "code": "Skinny+fit",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Slim fit",
                  "id": "slimfit",
                  "filtercount": 103,
                  "code": "Slim+fit",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Super skinny fit",
                  "id": "superskinnyfit",
                  "filtercount": 56,
                  "code": "Super+skinny+fit",
                  "selected": false,
                  "disabled": false
              }
          ]
      },
      {
          "id": "contexts",
          "name": "Occasion",
          "filtervalues": [
              {
                  "name": "Casual",
                  "id": "casual",
                  "filtercount": 552,
                  "code": "Casual",
                  "selected": false,
                  "disabled": false
              }
          ]
      },
      {
          "id": "concepts",
          "name": "Concept",
          "filtervalues": [
              {
                  "name": "DENIM",
                  "id": "denim",
                  "filtercount": 400,
                  "code": "DENIM",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "DIVIDED",
                  "id": "divided",
                  "filtercount": 201,
                  "code": "DIVIDED",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "EVERYDAY FASHION",
                  "id": "everydayfashion",
                  "filtercount": 54,
                  "code": "EVERYDAY+FASHION",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "H&M MAN",
                  "id": "hmman",
                  "filtercount": 3,
                  "code": "H%26M+MAN",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "H&M+",
                  "id": "hm",
                  "filtercount": 64,
                  "code": "H%26M%2B",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "MAMA",
                  "id": "mama",
                  "filtercount": 64,
                  "code": "MAMA",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "MODERN CLASSIC",
                  "id": "modernclassic",
                  "filtercount": 3,
                  "code": "MODERN+CLASSIC",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "TREND",
                  "id": "trend",
                  "filtercount": 20,
                  "code": "TREND",
                  "selected": false,
                  "disabled": false
              }
          ]
      },
      {
          "id": "qualities",
          "name": "Quality",
          "filtervalues": [
              {
                  "name": "Conscious",
                  "id": "1conscious",
                  "filtercount": 225,
                  "code": "1_Conscious",
                  "selected": false,
                  "disabled": false
              },
              {
                  "name": "Premium Selection",
                  "id": "2premiumselection",
                  "filtercount": 10,
                  "code": "2_Premium+Selection",
                  "selected": false,
                  "disabled": false
              }
          ]
      }
  ],
  "sortby": {
      "id": "sort",
      "name": "Sort by",
      "filtervalues": [
          {
              "name": "Recommended",
              "id": "sort-stock",
              "code": "stock",
              "selected": true
          },
          {
              "name": "Newest",
              "id": "sort-newProduct",
              "code": "newProduct",
              "selected": false
          },
          {
              "name": "Lowest Price",
              "id": "sort-ascPrice",
              "code": "ascPrice",
              "selected": false
          },
          {
              "name": "Highest Price",
              "id": "sort-descPrice",
              "code": "descPrice",
              "selected": false
          }
      ]
  },
  "products": [
      {
          "articleCode": "0941374004",
          "onClick": "setVCParameter('SEARCH','0941374004'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5NDEzNzRfZ3JvdXBfMDA0X2VuX2diOzA5NDEzNzQwMDRfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0941374004'); setOsaParameters(utag_data.category_id,'SMALL','0941374004');",
          "link": "/en_gb/productpage.0941374004.html",
          "title": "Slim High Ankle Jeans",
          "category": "ladies_jeans_slim",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/80/ec/80ecc7012130bbcb940bba577f5a37fa8e7ecf46.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/a3/6b/a36bb689c5730da9f2266d9ddae796373768ed82.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
                  "alt": "Slim High Ankle Jeans Model",
                  "dataAltText": "Slim High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0941374004|Slim High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£17.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "New Arrival",
          "swatchesTotal": "4",
          "swatches": [
              {
                  "colorCode": "#FFFFFF",
                  "articleLink": "/en_gb/productpage.0941374004.html",
                  "colorName": "White"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0941374003.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#2E2E30",
                  "articleLink": "/en_gb/productpage.0941374005.html",
                  "colorName": "Nearly black"
              },
              {
                  "colorCode": "#494A4F",
                  "articleLink": "/en_gb/productpage.0941374006.html",
                  "colorName": "Dark denim grey"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0904993003",
          "onClick": "setVCParameter('SEARCH','0904993003'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5MDQ5OTNfZ3JvdXBfMDAzX2VuX2diOzA5MDQ5OTMwMDNfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0904993003'); setOsaParameters(utag_data.category_id,'SMALL','0904993003');",
          "link": "/en_gb/productpage.0904993003.html",
          "title": "Girlfriend Regular Jeans",
          "category": "ladies_jeans",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/d1/18/d11809439fd397a23a06de56ac74e6e420ca04be.jpg],origin[dam],category[ladies_jeans],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/52/15/521527f246e640ab9dc0276f1cbe4743b7e04f61.jpg],origin[dam],category[ladies_jeans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
                  "alt": "Girlfriend Regular Jeans Model",
                  "dataAltText": "Girlfriend Regular Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0904993003|Girlfriend Regular Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "Conscious",
          "marketingMarkerType": "marker-environment",
          "marketingMarkerCss": "",
          "price": "£34.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "New Arrival",
          "swatchesTotal": "2",
          "swatches": [
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0904993003.html",
                  "colorName": "Denim blue/Trashed"
              },
              {
                  "colorCode": "#4C5164",
                  "articleLink": "/en_gb/productpage.0904993002.html",
                  "colorName": "Denim blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0920829006",
          "onClick": "setVCParameter('SEARCH','0920829006'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5MjA4MjlfZ3JvdXBfMDA2X2VuX2diOzA5MjA4MjkwMDZfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0920829006'); setOsaParameters(utag_data.category_id,'SMALL','0920829006');",
          "link": "/en_gb/productpage.0920829006.html",
          "title": "Wide jeans",
          "category": "ladies_trousers_highwaisted",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/00/40/0040e473dbd8bca7153d7525c734ed287bb92979.jpg],origin[dam],category[ladies_trousers_highwaisted],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/5e/98/5e98bb01c64d909cdfccc61941c191977c264bff.jpg],origin[dam],category[ladies_trousers_highwaisted],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
                  "alt": "Wide jeans Model",
                  "dataAltText": "Wide jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": true,
          "favouritesTracking": "Favourites|0920829006|Wide jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£17.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "New Arrival",
          "swatchesTotal": "4",
          "swatches": [
              {
                  "colorCode": "#E8E4D5",
                  "articleLink": "/en_gb/productpage.0920829006.html",
                  "colorName": "Cream"
              },
              {
                  "colorCode": "#272628",
                  "articleLink": "/en_gb/productpage.0920829003.html",
                  "colorName": "Black"
              },
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0920829007.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#BEB3A2",
                  "articleLink": "/en_gb/productpage.0920829010.html",
                  "colorName": "Light beige"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0714790020",
          "onClick": "setVCParameter('SEARCH','0714790020'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA3MTQ3OTBfZ3JvdXBfMDIwX2VuX2diOzA3MTQ3OTAwMjBfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0714790020'); setOsaParameters(utag_data.category_id,'SMALL','0714790020');",
          "link": "/en_gb/productpage.0714790020.html",
          "title": "Mom High Ankle Jeans",
          "category": "ladies_jeans_loose",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/0d/66/0d66f74fb15dd308979243770b7e158541cdf941.jpg],origin[dam],category[ladies_jeans_mom],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/fe/84/fe84eec77c2b3efc0da45ac7a82d6145d06d83a1.jpg],origin[dam],category[ladies_jeans_mom],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Mom High Ankle Jeans Model",
                  "dataAltText": "Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0714790020|Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£24.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "6",
          "swatches": [
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0714790020.html",
                  "colorName": "Light denim blue/Washed"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0714790017.html",
                  "colorName": "Denim blue/Washed"
              },
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0714790021.html",
                  "colorName": "Pale denim blue"
              },
              {
                  "colorCode": "#272628",
                  "articleLink": "/en_gb/productpage.0714790028.html",
                  "colorName": "Black"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0720504001",
          "onClick": "setVCParameter('SEARCH','0720504001'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA3MjA1MDRfZ3JvdXBfMDAxX2VuX2diOzA3MjA1MDQwMDFfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0720504001'); setOsaParameters(utag_data.category_id,'SMALL','0720504001');",
          "link": "/en_gb/productpage.0720504001.html",
          "title": "Skinny Jeans",
          "category": "men_jeans_skinny",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/d7/76/d7765d7300eef058455dbbb9e719dacf669801de.jpg],origin[dam],category[men_jeans_skinny],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/5d/0d/5d0d93e035dba0a9a40f1c93e35ba0d33ea02822.jpg],origin[dam],category[men_jeans_skinny],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Skinny Jeans Model",
                  "dataAltText": "Skinny Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": true,
          "favouritesTracking": "Favourites|0720504001|Skinny Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£17.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "6",
          "swatches": [
              {
                  "colorCode": "#272628",
                  "articleLink": "/en_gb/productpage.0720504001.html",
                  "colorName": "Black"
              },
              {
                  "colorCode": "#4C5164",
                  "articleLink": "/en_gb/productpage.0720504002.html",
                  "colorName": "Dark denim blue"
              },
              {
                  "colorCode": "#7187BC",
                  "articleLink": "/en_gb/productpage.0720504007.html",
                  "colorName": "Midnight blue"
              },
              {
                  "colorCode": "#666B75",
                  "articleLink": "/en_gb/productpage.0720504008.html",
                  "colorName": "Dark grey"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0941666004",
          "onClick": "setVCParameter('SEARCH','0941666004'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5NDE2NjZfZ3JvdXBfMDA0X2VuX2diOzA5NDE2NjYwMDRfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0941666004'); setOsaParameters(utag_data.category_id,'SMALL','0941666004');",
          "link": "/en_gb/productpage.0941666004.html",
          "title": "Slim Mom High Ankle Jeans",
          "category": "ladies_jeans_mom",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/63/70/63703dc82ad7060188a6b427a8e6292270161fa8.jpg],origin[dam],category[ladies_jeans_mom],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/a3/66/a366d35917124ad1c9f40fc1301c2224600fdb41.jpg],origin[dam],category[ladies_jeans_mom],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Slim Mom High Ankle Jeans Model",
                  "dataAltText": "Slim Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0941666004|Slim Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "7",
          "swatches": [
              {
                  "colorCode": "#58657F",
                  "articleLink": "/en_gb/productpage.0941666004.html",
                  "colorName": "Medium blue"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0941666001.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#E8E4D5",
                  "articleLink": "/en_gb/productpage.0941666003.html",
                  "colorName": "Cream"
              },
              {
                  "colorCode": "#494A4F",
                  "articleLink": "/en_gb/productpage.0941666005.html",
                  "colorName": "Black/Washed"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0714790017",
          "onClick": "setVCParameter('SEARCH','0714790017'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA3MTQ3OTBfZ3JvdXBfMDE3X2VuX2diOzA3MTQ3OTAwMTdfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0714790017'); setOsaParameters(utag_data.category_id,'SMALL','0714790017');",
          "link": "/en_gb/productpage.0714790017.html",
          "title": "Mom High Ankle Jeans",
          "category": "ladies_jeans_loose",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/f7/ec/f7ece54b0b5a5c1cd8bf50dad07753f74f884c81.jpg],origin[dam],category[ladies_jeans_loose],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/05/8e/058e384991c63c6877af45e2ace8b5d7a40df070.jpg],origin[dam],category[ladies_jeans_loose],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Mom High Ankle Jeans Model",
                  "dataAltText": "Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0714790017|Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "Conscious",
          "marketingMarkerType": "marker-environment",
          "marketingMarkerCss": "",
          "price": "£24.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "6",
          "swatches": [
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0714790017.html",
                  "colorName": "Denim blue/Washed"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0714790020.html",
                  "colorName": "Light denim blue/Washed"
              },
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0714790021.html",
                  "colorName": "Pale denim blue"
              },
              {
                  "colorCode": "#272628",
                  "articleLink": "/en_gb/productpage.0714790028.html",
                  "colorName": "Black"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0940974003",
          "onClick": "setVCParameter('SEARCH','0940974003'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5NDA5NzRfZ3JvdXBfMDAzX2VuX2diOzA5NDA5NzQwMDNfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0940974003'); setOsaParameters(utag_data.category_id,'SMALL','0940974003');",
          "link": "/en_gb/productpage.0940974003.html",
          "title": "Mom High Pleated Jeans",
          "category": "ladies_jeans_loose",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/d1/3c/d13cf2fbe0994f59e7b0adf57f8caf2d8e34d4ff.jpg],origin[dam],category[ladies_jeans_loose],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/27/df/27dfa7c4953830d3535774645db9a6e9b490e3a9.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Mom High Pleated Jeans Model",
                  "dataAltText": "Mom High Pleated Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0940974003|Mom High Pleated Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£24.99",
          "redPrice": "£15.00",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "2",
          "swatches": [
              {
                  "colorCode": "#7EA0B6",
                  "articleLink": "/en_gb/productpage.0940974003.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#33363A",
                  "articleLink": "/en_gb/productpage.0940974002.html",
                  "colorName": "Black/Washed out"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0919365008",
          "onClick": "setVCParameter('SEARCH','0919365008'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5MTkzNjVfZ3JvdXBfMDA4X2VuX2diOzA5MTkzNjUwMDhfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0919365008'); setOsaParameters(utag_data.category_id,'SMALL','0919365008');",
          "link": "/en_gb/productpage.0919365008.html",
          "title": "Mom High Ankle Jeans",
          "category": "ladies_jeans_mom",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/49/a6/49a6f3be566fec2ef45c5d86f4706734f9a5dc4c.jpg],origin[dam],category[ladies_jeans_mom],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/ea/5e/ea5e81d64abd2fb5fe4768fbb226ff00db050b61.jpg],origin[dam],category[ladies_jeans_mom],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Mom High Ankle Jeans Model",
                  "dataAltText": "Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0919365008|Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "7",
          "swatches": [
              {
                  "colorCode": "#798DB2",
                  "articleLink": "/en_gb/productpage.0919365008.html",
                  "colorName": "Light blue"
              },
              {
                  "colorCode": "#87A9D8",
                  "articleLink": "/en_gb/productpage.0919365002.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#71869E",
                  "articleLink": "/en_gb/productpage.0919365003.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#333538",
                  "articleLink": "/en_gb/productpage.0919365006.html",
                  "colorName": "Black/Washed out"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0941666009",
          "onClick": "setVCParameter('SEARCH','0941666009'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5NDE2NjZfZ3JvdXBfMDA5X2VuX2diOzA5NDE2NjYwMDlfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0941666009'); setOsaParameters(utag_data.category_id,'SMALL','0941666009');",
          "link": "/en_gb/productpage.0941666009.html",
          "title": "Slim Mom High Ankle Jeans",
          "category": "ladies_jeans_mom",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/bd/ca/bdcaa0f8435073d734af92b31fc9f42392ecae5b.jpg],origin[dam],category[ladies_jeans_mom],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/87/e4/87e45240466c4ee00dbcd726da7e2777d43c2170.jpg],origin[dam],category[ladies_jeans_mom],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Slim Mom High Ankle Jeans Model",
                  "dataAltText": "Slim Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0941666009|Slim Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "7",
          "swatches": [
              {
                  "colorCode": "#D0C2AA",
                  "articleLink": "/en_gb/productpage.0941666009.html",
                  "colorName": "Light beige"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0941666001.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#E8E4D5",
                  "articleLink": "/en_gb/productpage.0941666003.html",
                  "colorName": "Cream"
              },
              {
                  "colorCode": "#58657F",
                  "articleLink": "/en_gb/productpage.0941666004.html",
                  "colorName": "Medium blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0572998019",
          "onClick": "setVCParameter('SEARCH','0572998019'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA1NzI5OThfZ3JvdXBfMDE5X2VuX2diOzA1NzI5OTgwMTlfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0572998019'); setOsaParameters(utag_data.category_id,'SMALL','0572998019');",
          "link": "/en_gb/productpage.0572998019.html",
          "title": "Mom High Ankle Jeans",
          "category": "ladies_jeans_loose",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/68/09/6809becf10ed2b62e518e63e93be5395a753b9d5.jpg],origin[dam],category[ladies_jeans_loose],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/d9/78/d97898f63b00bf47f5816537c447711ef4831cf1.jpg],origin[dam],category[ladies_jeans_loose],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
                  "alt": "Mom High Ankle Jeans Model",
                  "dataAltText": "Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0572998019|Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "Conscious",
          "marketingMarkerType": "marker-environment",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "New Arrival",
          "swatchesTotal": "6",
          "swatches": [
              {
                  "colorCode": "#CDDEEF",
                  "articleLink": "/en_gb/productpage.0572998019.html",
                  "colorName": "Extra-light denim blue"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0572998001.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#767F8F",
                  "articleLink": "/en_gb/productpage.0572998006.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#3F3F42",
                  "articleLink": "/en_gb/productpage.0572998007.html",
                  "colorName": "Dark grey"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0941666006",
          "onClick": "setVCParameter('SEARCH','0941666006'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5NDE2NjZfZ3JvdXBfMDA2X2VuX2diOzA5NDE2NjYwMDZfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0941666006'); setOsaParameters(utag_data.category_id,'SMALL','0941666006');",
          "link": "/en_gb/productpage.0941666006.html",
          "title": "Slim Mom High Ankle Jeans",
          "category": "ladies_jeans_mom",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/28/a3/28a3e9d20ed5b147ee898da083e278a810b7fd18.jpg],origin[dam],category[ladies_jeans_mom],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/c3/cf/c3cfa20617157e2ee733f9b9ed913598da9e83ff.jpg],origin[dam],category[ladies_jeans_mom],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Slim Mom High Ankle Jeans Model",
                  "dataAltText": "Slim Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0941666006|Slim Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "7",
          "swatches": [
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0941666006.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0941666001.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#E8E4D5",
                  "articleLink": "/en_gb/productpage.0941666003.html",
                  "colorName": "Cream"
              },
              {
                  "colorCode": "#58657F",
                  "articleLink": "/en_gb/productpage.0941666004.html",
                  "colorName": "Medium blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0919365002",
          "onClick": "setVCParameter('SEARCH','0919365002'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5MTkzNjVfZ3JvdXBfMDAyX2VuX2diOzA5MTkzNjUwMDJfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0919365002'); setOsaParameters(utag_data.category_id,'SMALL','0919365002');",
          "link": "/en_gb/productpage.0919365002.html",
          "title": "Mom High Ankle Jeans",
          "category": "ladies_jeans_mom",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/d3/38/d3388ed69bf0ec6a3b2ffe7b7918990ce96ab11c.jpg],origin[dam],category[ladies_jeans_mom],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/bf/c8/bfc8faf1234c5d4da8468fa46d79de7578dce2fb.jpg],origin[dam],category[ladies_jeans_mom],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Mom High Ankle Jeans Model",
                  "dataAltText": "Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0919365002|Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "Conscious",
          "marketingMarkerType": "marker-environment",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "7",
          "swatches": [
              {
                  "colorCode": "#87A9D8",
                  "articleLink": "/en_gb/productpage.0919365002.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#71869E",
                  "articleLink": "/en_gb/productpage.0919365003.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#333538",
                  "articleLink": "/en_gb/productpage.0919365006.html",
                  "colorName": "Black/Washed out"
              },
              {
                  "colorCode": "#4D6D9B",
                  "articleLink": "/en_gb/productpage.0919365007.html",
                  "colorName": "Dark denim blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0919365006",
          "onClick": "setVCParameter('SEARCH','0919365006'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5MTkzNjVfZ3JvdXBfMDA2X2VuX2diOzA5MTkzNjUwMDZfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0919365006'); setOsaParameters(utag_data.category_id,'SMALL','0919365006');",
          "link": "/en_gb/productpage.0919365006.html",
          "title": "Mom High Ankle Jeans",
          "category": "ladies_jeans_mom",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/6c/21/6c21ec952f6d2b675173c0f1ace2cd13d618474a.jpg],origin[dam],category[ladies_jeans_mom],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/70/ee/70ee49b5e05b232ef218f0b906cd329450271ac1.jpg],origin[dam],category[ladies_jeans_mom],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Mom High Ankle Jeans Model",
                  "dataAltText": "Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": true,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0919365006|Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "£15.99",
          "bluePrice": "",
          "clubPriceText": "MEMBER PRICE",
          "sellingAttribute": "",
          "swatchesTotal": "7",
          "swatches": [
              {
                  "colorCode": "#333538",
                  "articleLink": "/en_gb/productpage.0919365006.html",
                  "colorName": "Black/Washed out"
              },
              {
                  "colorCode": "#87A9D8",
                  "articleLink": "/en_gb/productpage.0919365002.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#71869E",
                  "articleLink": "/en_gb/productpage.0919365003.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#4D6D9B",
                  "articleLink": "/en_gb/productpage.0919365007.html",
                  "colorName": "Dark denim blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0706016001",
          "onClick": "setVCParameter('SEARCH','0706016001'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA3MDYwMTZfZ3JvdXBfMDAxX2VuX2diOzA3MDYwMTYwMDFfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0706016001'); setOsaParameters(utag_data.category_id,'SMALL','0706016001');",
          "link": "/en_gb/productpage.0706016001.html",
          "title": "Super Skinny High Jeans",
          "category": "ladies_jeans_skinny_skinnyhigh",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/36/1c/361c32b4babe40defb697b9f8b7d113024748434.jpg],origin[dam],category[ladies_jeans_skinny_skinnyhigh],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/7c/6e/7c6ed6bf87f52c540d8d56b591a99f62557ad928.jpg],origin[dam],category[ladies_jeans_skinny_skinnyhigh],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Super Skinny High Jeans Model",
                  "dataAltText": "Super Skinny High Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0706016001|Super Skinny High Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£14.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "12",
          "swatches": [
              {
                  "colorCode": "#272628",
                  "articleLink": "/en_gb/productpage.0706016001.html",
                  "colorName": "Black"
              },
              {
                  "colorCode": "#8098CA",
                  "articleLink": "/en_gb/productpage.0706016002.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#54586D",
                  "articleLink": "/en_gb/productpage.0706016003.html",
                  "colorName": "Dark denim blue"
              },
              {
                  "colorCode": "#333860",
                  "articleLink": "/en_gb/productpage.0706016006.html",
                  "colorName": "Denim blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0706016002",
          "onClick": "setVCParameter('SEARCH','0706016002'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA3MDYwMTZfZ3JvdXBfMDAyX2VuX2diOzA3MDYwMTYwMDJfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0706016002'); setOsaParameters(utag_data.category_id,'SMALL','0706016002');",
          "link": "/en_gb/productpage.0706016002.html",
          "title": "Super Skinny High Jeans",
          "category": "ladies_jeans_skinny_skinnyhigh",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/74/5c/745cb0c3b283990629cb04a2e6eef7f88f265095.jpg],origin[dam],category[ladies_jeans_skinny_skinnyhigh],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/51/7e/517ef738c12fddea6a2ba520a81cbf4e71c4ea22.jpg],origin[dam],category[ladies_jeans_skinny_skinnyhigh],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Super Skinny High Jeans Model",
                  "dataAltText": "Super Skinny High Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0706016002|Super Skinny High Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£14.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "12",
          "swatches": [
              {
                  "colorCode": "#8098CA",
                  "articleLink": "/en_gb/productpage.0706016002.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#272628",
                  "articleLink": "/en_gb/productpage.0706016001.html",
                  "colorName": "Black"
              },
              {
                  "colorCode": "#54586D",
                  "articleLink": "/en_gb/productpage.0706016003.html",
                  "colorName": "Dark denim blue"
              },
              {
                  "colorCode": "#333860",
                  "articleLink": "/en_gb/productpage.0706016006.html",
                  "colorName": "Denim blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0714790028",
          "onClick": "setVCParameter('SEARCH','0714790028'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA3MTQ3OTBfZ3JvdXBfMDI4X2VuX2diOzA3MTQ3OTAwMjhfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0714790028'); setOsaParameters(utag_data.category_id,'SMALL','0714790028');",
          "link": "/en_gb/productpage.0714790028.html",
          "title": "Mom High Ankle Jeans",
          "category": "ladies_jeans_loose",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/36/75/3675fbda1fe2a322757002054c3593f9cb96ea8e.jpg],origin[dam],category[ladies_jeans_loose],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/f3/10/f3105a12b4e78a9e8114ed45ee8779ac804eb46d.jpg],origin[dam],category[ladies_jeans_loose],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Mom High Ankle Jeans Model",
                  "dataAltText": "Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0714790028|Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "Conscious",
          "marketingMarkerType": "marker-environment",
          "marketingMarkerCss": "",
          "price": "£24.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "6",
          "swatches": [
              {
                  "colorCode": "#272628",
                  "articleLink": "/en_gb/productpage.0714790028.html",
                  "colorName": "Black"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0714790017.html",
                  "colorName": "Denim blue/Washed"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0714790020.html",
                  "colorName": "Light denim blue/Washed"
              },
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0714790021.html",
                  "colorName": "Pale denim blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0964655001",
          "onClick": "setVCParameter('SEARCH','0964655001'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5NjQ2NTVfZ3JvdXBfMDAxX2VuX2diOzA5NjQ2NTUwMDFfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0964655001'); setOsaParameters(utag_data.category_id,'SMALL','0964655001');",
          "link": "/en_gb/productpage.0964655001.html",
          "title": "Skinny Ultra High Waist Jeans",
          "category": "ladies_jeans_skinny",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/ca/d6/cad6ba8380155be6a696a52ff433ab3413b12131.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/ab/34/ab34857d4d7106d84bebe7d4c29db4ddc120ddbc.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Skinny Ultra High Waist Jeans Model",
                  "dataAltText": "Skinny Ultra High Waist Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0964655001|Skinny Ultra High Waist Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "Lee x H&M",
          "marketingMarkerType": "marker-collection",
          "marketingMarkerCss": "",
          "price": "£34.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "2",
          "swatches": [
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0964655001.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0964655002.html",
                  "colorName": "Light denim blue/Trashed"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0799365028",
          "onClick": "setVCParameter('SEARCH','0799365028'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA3OTkzNjVfZ3JvdXBfMDI4X2VuX2diOzA3OTkzNjUwMjhfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0799365028'); setOsaParameters(utag_data.category_id,'SMALL','0799365028');",
          "link": "/en_gb/productpage.0799365028.html",
          "title": "Vintage Slim High Ankle Jeans",
          "category": "ladies_jeans_slim",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/79/e8/79e853aac6a6a38af378b279af0420716a81c050.jpg],origin[dam],category[ladies_jeans_slim],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/fd/bb/fdbbb69accad2bf7f9ed7a6f763e947d3dd658c9.jpg],origin[dam],category[ladies_jeans_slim],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Vintage Slim High Ankle Jeans Model",
                  "dataAltText": "Vintage Slim High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0799365028|Vintage Slim High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "Conscious",
          "marketingMarkerType": "marker-environment",
          "marketingMarkerCss": "",
          "price": "£24.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "7",
          "swatches": [
              {
                  "colorCode": "#272628",
                  "articleLink": "/en_gb/productpage.0799365028.html",
                  "colorName": "Black/Washed out"
              },
              {
                  "colorCode": "#E8E0C9",
                  "articleLink": "/en_gb/productpage.0799365001.html",
                  "colorName": "Cream"
              },
              {
                  "colorCode": "#798DB2",
                  "articleLink": "/en_gb/productpage.0799365002.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0799365004.html",
                  "colorName": "Denim blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0892737001",
          "onClick": "setVCParameter('SEARCH','0892737001'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA4OTI3MzdfZ3JvdXBfMDAxX2VuX2diOzA4OTI3MzcwMDFfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0892737001'); setOsaParameters(utag_data.category_id,'SMALL','0892737001');",
          "link": "/en_gb/productpage.0892737001.html",
          "title": "3-pack Skinny Fit Jeans",
          "category": "kids_babyboy_jeans",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/ec/90/ec908967705f4557d30cbff7e858207ab0c68bff.jpg],origin[dam],category[kids_babyboy_jeans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/ec/90/ec908967705f4557d30cbff7e858207ab0c68bff.jpg],origin[dam],category[kids_babyboy_jeans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "3-pack Skinny Fit Jeans Model",
                  "dataAltText": "3-pack Skinny Fit Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0892737001|3-pack Skinny Fit Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "1",
          "swatches": [
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0892737001.html",
                  "colorName": "Denim blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0799365001",
          "onClick": "setVCParameter('SEARCH','0799365001'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA3OTkzNjVfZ3JvdXBfMDAxX2VuX2diOzA3OTkzNjUwMDFfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0799365001'); setOsaParameters(utag_data.category_id,'SMALL','0799365001');",
          "link": "/en_gb/productpage.0799365001.html",
          "title": "Vintage Slim High Ankle Jeans",
          "category": "ladies_jeans_slim",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/a7/1b/a71b16947be0b7eefbe72b264ee2e3c5a9a7256c.jpg],origin[dam],category[ladies_jeans_slim],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/05/b9/05b9f9d464fc8a620ff57e8e59905b39597b3519.jpg],origin[dam],category[ladies_jeans_slim],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
                  "alt": "Vintage Slim High Ankle Jeans Model",
                  "dataAltText": "Vintage Slim High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0799365001|Vintage Slim High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "Conscious",
          "marketingMarkerType": "marker-environment",
          "marketingMarkerCss": "",
          "price": "£24.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "7",
          "swatches": [
              {
                  "colorCode": "#E8E0C9",
                  "articleLink": "/en_gb/productpage.0799365001.html",
                  "colorName": "Cream"
              },
              {
                  "colorCode": "#798DB2",
                  "articleLink": "/en_gb/productpage.0799365002.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0799365004.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0799365015.html",
                  "colorName": "Light denim blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0920829007",
          "onClick": "setVCParameter('SEARCH','0920829007'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5MjA4MjlfZ3JvdXBfMDA3X2VuX2diOzA5MjA4MjkwMDdfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0920829007'); setOsaParameters(utag_data.category_id,'SMALL','0920829007');",
          "link": "/en_gb/productpage.0920829007.html",
          "title": "Wide jeans",
          "category": "ladies_trousers_highwaisted",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/a2/a7/a2a73777d63a6f194b8221c656e44035dc640d8c.jpg],origin[dam],category[ladies_trousers_highwaisted],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/37/6a/376af788aa482677ad05b8ad0d89f5b0a0ce8adf.jpg],origin[dam],category[ladies_trousers_highwaisted],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
                  "alt": "Wide jeans Model",
                  "dataAltText": "Wide jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": true,
          "favouritesTracking": "Favourites|0920829007|Wide jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£17.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "New Arrival",
          "swatchesTotal": "4",
          "swatches": [
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0920829007.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#272628",
                  "articleLink": "/en_gb/productpage.0920829003.html",
                  "colorName": "Black"
              },
              {
                  "colorCode": "#E8E4D5",
                  "articleLink": "/en_gb/productpage.0920829006.html",
                  "colorName": "Cream"
              },
              {
                  "colorCode": "#BEB3A2",
                  "articleLink": "/en_gb/productpage.0920829010.html",
                  "colorName": "Light beige"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0941374005",
          "onClick": "setVCParameter('SEARCH','0941374005'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5NDEzNzRfZ3JvdXBfMDA1X2VuX2diOzA5NDEzNzQwMDVfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0941374005'); setOsaParameters(utag_data.category_id,'SMALL','0941374005');",
          "link": "/en_gb/productpage.0941374005.html",
          "title": "Slim High Ankle Jeans",
          "category": "ladies_jeans_slim",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/3e/ac/3eacb67e0a7ebf91b65f1173f9e85767e981d3b7.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/7c/e0/7ce0cc615375e9ea03276d5f213e40bd6c7379b6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
                  "alt": "Slim High Ankle Jeans Model",
                  "dataAltText": "Slim High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0941374005|Slim High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£17.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "New Arrival",
          "swatchesTotal": "4",
          "swatches": [
              {
                  "colorCode": "#2E2E30",
                  "articleLink": "/en_gb/productpage.0941374005.html",
                  "colorName": "Nearly black"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0941374003.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#FFFFFF",
                  "articleLink": "/en_gb/productpage.0941374004.html",
                  "colorName": "White"
              },
              {
                  "colorCode": "#494A4F",
                  "articleLink": "/en_gb/productpage.0941374006.html",
                  "colorName": "Dark denim grey"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0572998007",
          "onClick": "setVCParameter('SEARCH','0572998007'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA1NzI5OThfZ3JvdXBfMDA3X2VuX2diOzA1NzI5OTgwMDdfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0572998007'); setOsaParameters(utag_data.category_id,'SMALL','0572998007');",
          "link": "/en_gb/productpage.0572998007.html",
          "title": "Mom High Ankle Jeans",
          "category": "ladies_jeans_loose",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/b1/45/b145c2d8309a8baa22288a22a6a0f3158d4ea286.jpg],origin[dam],category[ladies_jeans_loose],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/50/d5/50d5db92dc3d79991bf41fc3362b71a928c5fed2.jpg],origin[dam],category[ladies_jeans_loose],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Mom High Ankle Jeans Model",
                  "dataAltText": "Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0572998007|Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "6",
          "swatches": [
              {
                  "colorCode": "#3F3F42",
                  "articleLink": "/en_gb/productpage.0572998007.html",
                  "colorName": "Dark grey"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0572998001.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#767F8F",
                  "articleLink": "/en_gb/productpage.0572998006.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#87A9D8",
                  "articleLink": "/en_gb/productpage.0572998009.html",
                  "colorName": "Light denim blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0914441001",
          "onClick": "setVCParameter('SEARCH','0914441001'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5MTQ0NDFfZ3JvdXBfMDAxX2VuX2diOzA5MTQ0NDEwMDFfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0914441001'); setOsaParameters(utag_data.category_id,'SMALL','0914441001');",
          "link": "/en_gb/productpage.0914441001.html",
          "title": "Curvy High Waist Jeggings",
          "category": "ladies_jeans",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/36/2b/362baf1e326d5533ad5fe6a3393984208337cfde.jpg],origin[dam],category[ladies_jeans],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/95/da/95da583351086c6dba5ff9ea1cb9496645c369fd.jpg],origin[dam],category[ladies_jeans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
                  "alt": "Curvy High Waist Jeggings Model",
                  "dataAltText": "Curvy High Waist Jeggings"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0914441001|Curvy High Waist Jeggings|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£17.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "8",
          "swatches": [
              {
                  "colorCode": "#272628",
                  "articleLink": "/en_gb/productpage.0914441001.html",
                  "colorName": "Black"
              },
              {
                  "colorCode": "#272628",
                  "articleLink": "/en_gb/productpage.0914441002.html",
                  "colorName": "Black/Coating"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0914441003.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0914441004.html",
                  "colorName": "Blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0961120002",
          "onClick": "setVCParameter('SEARCH','0961120002'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5NjExMjBfZ3JvdXBfMDAyX2VuX2diOzA5NjExMjAwMDJfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0961120002'); setOsaParameters(utag_data.category_id,'SMALL','0961120002');",
          "link": "/en_gb/productpage.0961120002.html",
          "title": "Wide High Ankle Jeans",
          "category": "ladies_jeans_wide",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/5c/0b/5c0ba58b7aba1551eff1d9465f003c65e429cf54.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/8e/0b/8e0b2c5e54591c9fb98f1e8851b2e8247adf7eb2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Wide High Ankle Jeans Model",
                  "dataAltText": "Wide High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0961120002|Wide High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "4",
          "swatches": [
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0961120002.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0961120001.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#E8E4D5",
                  "articleLink": "/en_gb/productpage.0961120003.html",
                  "colorName": "Cream"
              },
              {
                  "colorCode": "#494A4F",
                  "articleLink": "/en_gb/productpage.0961120004.html",
                  "colorName": "Black"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0814631001",
          "onClick": "setVCParameter('SEARCH','0814631001'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA4MTQ2MzFfZ3JvdXBfMDAxX2VuX2diOzA4MTQ2MzEwMDFfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0814631001'); setOsaParameters(utag_data.category_id,'SMALL','0814631001');",
          "link": "/en_gb/productpage.0814631001.html",
          "title": "Freefit® Slim Jeans",
          "category": "men_jeans_slim",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/55/12/55128c47878f94fa50a607bac7dbe50e38ffec7d.jpg],origin[dam],category[men_jeans_slim],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/40/cf/40cf42a76cf1f0ee44baa98d75acc836ef9d85d5.jpg],origin[dam],category[men_jeans_slim],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Freefit® Slim Jeans Model",
                  "dataAltText": "Freefit® Slim Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0814631001|Freefit® Slim Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "Premium Selection",
          "marketingMarkerType": "marker-quality",
          "marketingMarkerCss": "",
          "price": "£39.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "4",
          "swatches": [
              {
                  "colorCode": "#4C5164",
                  "articleLink": "/en_gb/productpage.0814631001.html",
                  "colorName": "Dark denim blue"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0814631002.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0814631004.html",
                  "colorName": "Pale denim blue"
              },
              {
                  "colorCode": "#272628",
                  "articleLink": "/en_gb/productpage.0814631006.html",
                  "colorName": "Black/No fade black"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0961120003",
          "onClick": "setVCParameter('SEARCH','0961120003'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5NjExMjBfZ3JvdXBfMDAzX2VuX2diOzA5NjExMjAwMDNfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0961120003'); setOsaParameters(utag_data.category_id,'SMALL','0961120003');",
          "link": "/en_gb/productpage.0961120003.html",
          "title": "Wide High Ankle Jeans",
          "category": "ladies_jeans_wide",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/32/0d/320d797c60cbfc72e388e8351d00193226239dd6.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/a6/6e/a66ec127dafec75a87bcda75e2c83a0f9db48061.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
                  "alt": "Wide High Ankle Jeans Model",
                  "dataAltText": "Wide High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0961120003|Wide High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "New Arrival",
          "swatchesTotal": "4",
          "swatches": [
              {
                  "colorCode": "#E8E4D5",
                  "articleLink": "/en_gb/productpage.0961120003.html",
                  "colorName": "Cream"
              },
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0961120001.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0961120002.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#494A4F",
                  "articleLink": "/en_gb/productpage.0961120004.html",
                  "colorName": "Black"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0920829003",
          "onClick": "setVCParameter('SEARCH','0920829003'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5MjA4MjlfZ3JvdXBfMDAzX2VuX2diOzA5MjA4MjkwMDNfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0920829003'); setOsaParameters(utag_data.category_id,'SMALL','0920829003');",
          "link": "/en_gb/productpage.0920829003.html",
          "title": "Wide jeans",
          "category": "ladies_trousers_highwaisted",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/1c/f5/1cf5cf7398147978d01701c287db9ce179eb9d99.jpg],origin[dam],category[ladies_trousers_highwaisted],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/fe/3f/fe3f8579a25f526a462b1ef5f7e64e5fc2a99722.jpg],origin[dam],category[ladies_trousers_highwaisted],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Wide jeans Model",
                  "dataAltText": "Wide jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": true,
          "favouritesTracking": "Favourites|0920829003|Wide jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£17.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "4",
          "swatches": [
              {
                  "colorCode": "#272628",
                  "articleLink": "/en_gb/productpage.0920829003.html",
                  "colorName": "Black"
              },
              {
                  "colorCode": "#E8E4D5",
                  "articleLink": "/en_gb/productpage.0920829006.html",
                  "colorName": "Cream"
              },
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0920829007.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#BEB3A2",
                  "articleLink": "/en_gb/productpage.0920829010.html",
                  "colorName": "Light beige"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0871889008",
          "onClick": "setVCParameter('SEARCH','0871889008'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA4NzE4ODlfZ3JvdXBfMDA4X2VuX2diOzA4NzE4ODkwMDhfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0871889008'); setOsaParameters(utag_data.category_id,'SMALL','0871889008');",
          "link": "/en_gb/productpage.0871889008.html",
          "title": "Wide High Jeans",
          "category": "ladies_jeans_straight",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/d6/10/d610431d71938fb4e93ab554515e134b1272e22c.jpg],origin[dam],category[ladies_jeans_straight],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/cf/c0/cfc04ea2b893dcc5e82f36973dbb6c6928132bf2.jpg],origin[dam],category[ladies_jeans_straight],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Wide High Jeans Model",
                  "dataAltText": "Wide High Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0871889008|Wide High Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£24.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "6",
          "swatches": [
              {
                  "colorCode": "#819EB5",
                  "articleLink": "/en_gb/productpage.0871889008.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#BABFCC",
                  "articleLink": "/en_gb/productpage.0871889001.html",
                  "colorName": "Pale denim blue"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0871889003.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#272628",
                  "articleLink": "/en_gb/productpage.0871889006.html",
                  "colorName": "Black"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0941374003",
          "onClick": "setVCParameter('SEARCH','0941374003'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5NDEzNzRfZ3JvdXBfMDAzX2VuX2diOzA5NDEzNzQwMDNfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0941374003'); setOsaParameters(utag_data.category_id,'SMALL','0941374003');",
          "link": "/en_gb/productpage.0941374003.html",
          "title": "Slim High Ankle Jeans",
          "category": "ladies_jeans_slim",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/e6/fd/e6fdce5902035edd3bc8b43f820bd6f3230cd647.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/33/f1/33f177137e4e30f4b3db478ca9129a23941098e6.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
                  "alt": "Slim High Ankle Jeans Model",
                  "dataAltText": "Slim High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0941374003|Slim High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£17.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "New Arrival",
          "swatchesTotal": "4",
          "swatches": [
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0941374003.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#FFFFFF",
                  "articleLink": "/en_gb/productpage.0941374004.html",
                  "colorName": "White"
              },
              {
                  "colorCode": "#2E2E30",
                  "articleLink": "/en_gb/productpage.0941374005.html",
                  "colorName": "Nearly black"
              },
              {
                  "colorCode": "#494A4F",
                  "articleLink": "/en_gb/productpage.0941374006.html",
                  "colorName": "Dark denim grey"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0941666005",
          "onClick": "setVCParameter('SEARCH','0941666005'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5NDE2NjZfZ3JvdXBfMDA1X2VuX2diOzA5NDE2NjYwMDVfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0941666005'); setOsaParameters(utag_data.category_id,'SMALL','0941666005');",
          "link": "/en_gb/productpage.0941666005.html",
          "title": "Slim Mom High Ankle Jeans",
          "category": "ladies_jeans_mom",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/0b/bb/0bbb5771771a2d4eb9ab82ed4aa1f4ab317b3b30.jpg],origin[dam],category[ladies_jeans_mom],type[LOOKBOOK],res[m],hmver[2]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/bf/d3/bfd310b26a8963442cf766b41b7ec69c877ae0f9.jpg],origin[dam],category[ladies_jeans_mom],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Slim Mom High Ankle Jeans Model",
                  "dataAltText": "Slim Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0941666005|Slim Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "7",
          "swatches": [
              {
                  "colorCode": "#494A4F",
                  "articleLink": "/en_gb/productpage.0941666005.html",
                  "colorName": "Black/Washed"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0941666001.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#E8E4D5",
                  "articleLink": "/en_gb/productpage.0941666003.html",
                  "colorName": "Cream"
              },
              {
                  "colorCode": "#58657F",
                  "articleLink": "/en_gb/productpage.0941666004.html",
                  "colorName": "Medium blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0951348002",
          "onClick": "setVCParameter('SEARCH','0951348002'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5NTEzNDhfZ3JvdXBfMDAyX2VuX2diOzA5NTEzNDgwMDJfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0951348002'); setOsaParameters(utag_data.category_id,'SMALL','0951348002');",
          "link": "/en_gb/productpage.0951348002.html",
          "title": "Straight High Ankle Jeans",
          "category": "ladies_jeans_straight",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/78/3c/783c509c42dc1acfb63ee681a3fcd9fa2fc194bb.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/39/d3/39d3a489ff9b16aa0072ebc6dffe6b20f794d006.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
                  "alt": "Straight High Ankle Jeans Model",
                  "dataAltText": "Straight High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0951348002|Straight High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "Conscious",
          "marketingMarkerType": "marker-environment",
          "marketingMarkerCss": "",
          "price": "£24.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "New Arrival",
          "swatchesTotal": "3",
          "swatches": [
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0951348002.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0951348001.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#494A4F",
                  "articleLink": "/en_gb/productpage.0951348004.html",
                  "colorName": "Dark grey"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0799365002",
          "onClick": "setVCParameter('SEARCH','0799365002'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA3OTkzNjVfZ3JvdXBfMDAyX2VuX2diOzA3OTkzNjUwMDJfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0799365002'); setOsaParameters(utag_data.category_id,'SMALL','0799365002');",
          "link": "/en_gb/productpage.0799365002.html",
          "title": "Vintage Slim High Ankle Jeans",
          "category": "ladies_jeans_slim",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/58/fa/58fa8aa1269a92c7800280047da898e1f306a5c3.jpg],origin[dam],category[ladies_jeans_slim],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/5e/8b/5e8bf6f5ff1de29d21e58fb459b01b3707fdcbbc.jpg],origin[dam],category[ladies_jeans_slim],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Vintage Slim High Ankle Jeans Model",
                  "dataAltText": "Vintage Slim High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0799365002|Vintage Slim High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "Conscious",
          "marketingMarkerType": "marker-environment",
          "marketingMarkerCss": "",
          "price": "£24.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "7",
          "swatches": [
              {
                  "colorCode": "#798DB2",
                  "articleLink": "/en_gb/productpage.0799365002.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#E8E0C9",
                  "articleLink": "/en_gb/productpage.0799365001.html",
                  "colorName": "Cream"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0799365004.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0799365015.html",
                  "colorName": "Light denim blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0919365010",
          "onClick": "setVCParameter('SEARCH','0919365010'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5MTkzNjVfZ3JvdXBfMDEwX2VuX2diOzA5MTkzNjUwMTBfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0919365010'); setOsaParameters(utag_data.category_id,'SMALL','0919365010');",
          "link": "/en_gb/productpage.0919365010.html",
          "title": "Mom High Ankle Jeans",
          "category": "ladies_jeans_mom",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/f1/49/f149a8a058da66bf12949ab2a9f29e6a40cbf3d9.jpg],origin[dam],category[ladies_jeans_mom],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/e7/75/e775f15a416f073a5963b0713a8d89979410081e.jpg],origin[dam],category[ladies_jeans_mom],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Mom High Ankle Jeans Model",
                  "dataAltText": "Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0919365010|Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "7",
          "swatches": [
              {
                  "colorCode": "#53648E",
                  "articleLink": "/en_gb/productpage.0919365010.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#87A9D8",
                  "articleLink": "/en_gb/productpage.0919365002.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#71869E",
                  "articleLink": "/en_gb/productpage.0919365003.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#333538",
                  "articleLink": "/en_gb/productpage.0919365006.html",
                  "colorName": "Black/Washed out"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0852953003",
          "onClick": "setVCParameter('SEARCH','0852953003'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA4NTI5NTNfZ3JvdXBfMDAzX2VuX2diOzA4NTI5NTMwMDNfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0852953003'); setOsaParameters(utag_data.category_id,'SMALL','0852953003');",
          "link": "/en_gb/productpage.0852953003.html",
          "title": "3-pack jeggings",
          "category": "kids_babygirl_jeans",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/db/f2/dbf2c05036cc173cb112a87139786f8a6cac297a.jpg],origin[dam],category[kids_babygirl_jeans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/db/f2/dbf2c05036cc173cb112a87139786f8a6cac297a.jpg],origin[dam],category[kids_babygirl_jeans],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "3-pack jeggings Model",
                  "dataAltText": "3-pack jeggings"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0852953003|3-pack jeggings|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£17.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "2",
          "swatches": [
              {
                  "colorCode": "#BECCD8",
                  "articleLink": "/en_gb/productpage.0852953003.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#DBC2C2",
                  "articleLink": "/en_gb/productpage.0852953004.html",
                  "colorName": "Light pink"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0941666001",
          "onClick": "setVCParameter('SEARCH','0941666001'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5NDE2NjZfZ3JvdXBfMDAxX2VuX2diOzA5NDE2NjYwMDFfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0941666001'); setOsaParameters(utag_data.category_id,'SMALL','0941666001');",
          "link": "/en_gb/productpage.0941666001.html",
          "title": "Slim Mom High Ankle Jeans",
          "category": "ladies_jeans_mom",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/68/d4/68d42fc10d60284cb8c32e861f318cccc1c072ac.jpg],origin[dam],category[ladies_jeans_mom],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/79/a1/79a1f7a9632f63ff00275fbc53f0445072e6756b.jpg],origin[dam],category[ladies_jeans_mom],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Slim Mom High Ankle Jeans Model",
                  "dataAltText": "Slim Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0941666001|Slim Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "7",
          "swatches": [
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0941666001.html",
                  "colorName": "Denim blue"
              },
              {
                  "colorCode": "#E8E4D5",
                  "articleLink": "/en_gb/productpage.0941666003.html",
                  "colorName": "Cream"
              },
              {
                  "colorCode": "#58657F",
                  "articleLink": "/en_gb/productpage.0941666004.html",
                  "colorName": "Medium blue"
              },
              {
                  "colorCode": "#494A4F",
                  "articleLink": "/en_gb/productpage.0941666005.html",
                  "colorName": "Black/Washed"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0572998001",
          "onClick": "setVCParameter('SEARCH','0572998001'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA1NzI5OThfZ3JvdXBfMDAxX2VuX2diOzA1NzI5OTgwMDFfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0572998001'); setOsaParameters(utag_data.category_id,'SMALL','0572998001');",
          "link": "/en_gb/productpage.0572998001.html",
          "title": "Mom High Ankle Jeans",
          "category": "ladies_jeans_loose",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/cc/6a/cc6aa9d3dd2b64b99abab7695237f4a5cd897449.jpg],origin[dam],category[ladies_jeans_loose],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/f6/5b/f65b8899602681921d5f3d04e8809274e4666a81.jpg],origin[dam],category[ladies_jeans_loose],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Mom High Ankle Jeans Model",
                  "dataAltText": "Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": true,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0572998001|Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "£15.99",
          "bluePrice": "",
          "clubPriceText": "MEMBER PRICE",
          "sellingAttribute": "",
          "swatchesTotal": "6",
          "swatches": [
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0572998001.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#767F8F",
                  "articleLink": "/en_gb/productpage.0572998006.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#3F3F42",
                  "articleLink": "/en_gb/productpage.0572998007.html",
                  "colorName": "Dark grey"
              },
              {
                  "colorCode": "#87A9D8",
                  "articleLink": "/en_gb/productpage.0572998009.html",
                  "colorName": "Light denim blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0968379001",
          "onClick": "setVCParameter('SEARCH','0968379001'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA5NjgzNzlfZ3JvdXBfMDAxX2VuX2diOzA5NjgzNzkwMDFfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0968379001'); setOsaParameters(utag_data.category_id,'SMALL','0968379001');",
          "link": "/en_gb/productpage.0968379001.html",
          "title": "Loose Straight High Jeans",
          "category": "ladies_jeans_loose",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/49/20/492069ae2e2ea4ded535d2e6c9055a4c16d46daf.jpg],origin[dam],category[],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/4c/3a/4c3aa8307e3c30787ac097f5a6510fd0552ac3e2.jpg],origin[dam],category[],type[DESCRIPTIVESTILLLIFE],res[m],hmver[2]&call=url[file:/product/style]",
                  "alt": "Loose Straight High Jeans Model",
                  "dataAltText": "Loose Straight High Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0968379001|Loose Straight High Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£24.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "New Arrival",
          "swatchesTotal": "1",
          "swatches": [
              {
                  "colorCode": "#8898AC",
                  "articleLink": "/en_gb/productpage.0968379001.html",
                  "colorName": "Light denim blue"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      },
      {
          "articleCode": "0572998009",
          "onClick": "setVCParameter('SEARCH','0572998009'); setNotificationTicket('Oy9zZWFyY2gvc2VhcmNoLWhpdHMtd2l0aC1jb3VudC9zZWFyY2gtaGl0czsjO3Byb2R1Y3Rfa2V5OzA1NzI5OThfZ3JvdXBfMDA5X2VuX2diOzA1NzI5OTgwMDlfZW5fZ2I7T0JKRUNUSVZFJDtOT05FOk5PTkU7ODk7','0572998009'); setOsaParameters(utag_data.category_id,'SMALL','0572998009');",
          "link": "/en_gb/productpage.0572998009.html",
          "title": "Mom High Ankle Jeans",
          "category": "ladies_jeans_loose",
          "image": [
              {
                  "src": "//lp2.hm.com/hmgoepprod?set=source[/ba/3c/ba3c058a4bb337cf2d9028717c83c44afd32082c.jpg],origin[dam],category[ladies_jeans_loose],type[LOOKBOOK],res[m],hmver[1]&call=url[file:/product/style]",
                  "dataAltImage": "//lp2.hm.com/hmgoepprod?set=source[/27/6d/276deef5ca05aa51e0df46d608811c8df1471e2a.jpg],origin[dam],category[ladies_jeans_loose],type[DESCRIPTIVESTILLLIFE],res[m],hmver[1]&call=url[file:/product/style]",
                  "alt": "Mom High Ankle Jeans Model",
                  "dataAltText": "Mom High Ankle Jeans"
              }
          ],
          "legalText": "",
          "promotionalMarkerText": "",
          "showPromotionalClubMarker": false,
          "showPriceMarker": false,
          "favouritesTracking": "Favourites|0572998009|Mom High Ankle Jeans|SEARCH",
          "favouritesSavedText": "SAVED AS FAVOURITE",
          "favouritesNotSavedText": "SAVE AS FAVOURITE",
          "marketingMarkerText": "",
          "marketingMarkerType": "",
          "marketingMarkerCss": "",
          "price": "£19.99",
          "redPrice": "",
          "yellowPrice": "",
          "bluePrice": "",
          "clubPriceText": "",
          "sellingAttribute": "",
          "swatchesTotal": "6",
          "swatches": [
              {
                  "colorCode": "#87A9D8",
                  "articleLink": "/en_gb/productpage.0572998009.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#79829D",
                  "articleLink": "/en_gb/productpage.0572998001.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#767F8F",
                  "articleLink": "/en_gb/productpage.0572998006.html",
                  "colorName": "Light denim blue"
              },
              {
                  "colorCode": "#3F3F42",
                  "articleLink": "/en_gb/productpage.0572998007.html",
                  "colorName": "Dark grey"
              }
          ],
          "preAccessStartDate": "",
          "preAccessEndDate": "",
          "preAccessGroups": [],
          "outOfStockText": "",
          "comingSoon": ""
      }
  ],
  "labels": {
      "filterBy": "Filter by",
      "totalCount": "744 Items",
      "showItemsText": "Show 744 Items",
      "loadMoreText": "SHOWING 40 of 744 Items"
  },
  "datatracking": {
      "filterUsed": "FILTER_CHANGED|Filter used|FILTER|SEARCH_PAGE|SEARCH|\"NONE\"|\"\"|\"NONE\"|\"NONE\"|\"NONE\"|\"NONE\"",
      "filterChanged": "FILTER_CHANGED|Filter removed|FILTER|SEARCH_PAGE|SEARCH|\"NONE\"|\"NONE\"|\"NONE\"|\"NONE\"|\"NONE\"|\"NONE\"",
      "filterRemoved": "FILTER_CHANGED|Filter removed|FILTER|SEARCH_PAGE|SEARCH|\"NONE\"|\"NONE\"|\"NONE\"|\"NONE\"|\"NONE\"|\"NONE\"",
      "loadMoreProducts": "LOAD_MORE_PRODUCTS|Load more products button clicked|Product list interactions|SEARCH_PAGE"
  }
}

$(document).ready(function () {
  $("#Navigation").click(
    function () { 
      $("#HomeDropdown").css("visibility","hidden");
      $("#RecycleDropdown").css("visibility","hidden");
      $('#Main').toggle();
});       

$("#Main").hide(); 

//-------------------------------------------------------------------- 
$("#Account").mouseover(function(){
      $("#HomeDropdown").css("visibility","visible");
      $("#RecycleDropdown").css("visibility","hidden");
});
$("#HomeDropdown").mouseleave (function(){
      $("#HomeDropdown").css("visibility","hidden");
});
//-------------------------------------------------------------------- 
$("#System").mouseover(function(){
      $("#RecycleDropdown").css("visibility","visible");
      $("#HomeDropdown").css("visibility","hidden");
});
//--------------------------------------------------------------------
$("#RecycleDropdown").mouseleave (function(){
      $("#RecycleDropdown").css("visibility","hidden");
});
//-------------------------------------------------------------------
$("#EcoShop").mouseover(function(){
      $("#HomeDropdown").css("visibility","hidden");
      $("#RecycleDropdown").css("visibility","hidden");
});
//-------------------------------------------------------------------
$("#Scanner").mouseover(function(){
      $("#HomeDropdown").css("visibility","hidden");
      $("#RecycleDropdown").css("visibility","hidden");
});   

  $.ajax({
  url:  "https://cors-anywhere.herokuapp.com/https://www2.hm.com/en_gb/search-results/_jcr_content/search.display.json?q=jeans"
  }).done(function (data) {//when the fuction is called do the following: 
    array = data.products;
    totalRecords = array.length;
    totalPages = Math.ceil(totalRecords / recPerPage);//calculate the number of pages;
    for (var index = 1; index <= totalPages; index++) {
        $("#app").append(`<div id=${index} class="button" onClick="showData(${index})"></div>`);
    }//based on the pages create the same number of buttons(6 pages -> 6 buttons)
    showData(1)
  });
});

//function that distributes the elements per page;
function showData(page) {
  button = $(".button");
  switchToNext();
  button.on("click", switchToNext);
  
  let displayRecordsIndex = Math.max(page - 1, 0) * recPerPage;//track the index of the current element
  let endRec = displayRecordsIndex + recPerPage; //get the number of the elements
  displayRecords = array.slice(displayRecordsIndex, endRec); //cut it from the main array
  $("#autoWidth").html(" ");
  for (var i = 0; i <= 5; i++) {
    displayRecordsIndex++; //keep a record of the shown element`s `index; increase by one every time element is added
    $("#autoWidth").append(` 
    <li class="item-a">
        <div class="box">
          <div class="slide-img">
      <img src=http://${displayRecords[i].image[0].src} id=${displayRecordsIndex}/> //getting the photo from HM api and display it
      <div class="overlay">
              <a id=${displayRecordsIndex} onClick="showDetails(${displayRecordsIndex})" class="buy-btn">Details</a> 
            </div>
          </div>
        </div>
      </li>
      
      `);
  }
}

function enableButton(size){
  $(".color").removeClass('active')//returns the class name which have to be removed
  $("#"+size).toggleClass('active');//check every size if it is actived or not

};
//pop up page
function showDetails(index) {
  let imageObject = array[index-1];
  $(".modal-body").html(" ");
  $(".title").html(" ");
  $(".modal-header").append(`<h2 class="title">${imageObject.title}</h2>`); //get the title of the element from the api 
  $(".modal-body").append(`<p id="price">Price: ${imageObject.price}</p>`); //get the price ot the element from the api
  $(".modal-body").append(`<p class="size">Size: </p>`); //list of sizes
 //populate the list with sizes
  $(".modal-body").append(`<div class="size-value">
  <ul class="ulButtons">
  <li class="liButtons"><button class="color" id="XS" onClick="enableButton('XS')">XS</button></li>
  <li class="liButtons"><button class="color" id="S" onClick="enableButton('S')">S</button></li>
  <li class="liButtons"><button class="color" id="M" onClick="enableButton('M')">M</button></li>
  <li class="liButtons"><button class="color" id="L" onClick="enableButton('L')">L</button></li>
  <li class="liButtons"><button class="color" id="XL" onClick="enableButton('XL')">XL</button></li>
  </ul>
</div>`);
 $(".modal-body").append(`<p class="delivery">Delivery: £3.50</p>`);
 $(".modal-body").append(`<a href="#" class="addToCart"><i class="fas fa-heart"></i>Add To Favourites</a>`);
 $(".modal-body").append(`<a href="#" class="review"><i class="fas fa-pen"></i>Write a review!</a>`);
 $(".modal-body").append(`<a href="#" class="buy"><i class="fas fa-shopping-cart"></i>Buy Now!</a>`);


  
  document.getElementById("myModal").style.display = "block";
  document.getElementsByClassName("close")[0].onclick = function () { //when the user clicks the close button, completely remove the element
    document.getElementById("myModal").style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == document.getElementById("myModal")) {
      document.getElementById("myModal").style.display = "none";
    }
  };
}

//function that regulates which button is clicked
function switchToNext() {
  var _this = $(this); //the current element
  if (_this.hasClass("active")) return false;
  else {
    $(".button.active").removeClass("active");
    _this.addClass("active");
  }
}

