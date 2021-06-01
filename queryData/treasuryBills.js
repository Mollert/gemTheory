
const treasuryBills = [
	{
		date: 202105,
		threeMonth: 0.01,
		sixMonth: 0.03,
		oneYear: 0.05
	},{
		date: 202104,
		threeMonth: 0.01,
		sixMonth: 0.03,
		oneYear: 0.05
	},{
		date: 202103,
		threeMonth: 0.03,
		sixMonth: 0.05,
		oneYear: 0.07
	},{
		date: 202102,
		threeMonth: 0.04,
		sixMonth: 0.05,
		oneYear: 0.08
	},{
		date: 202101,
		threeMonth: 0.06,
		sixMonth: 0.07,
		oneYear: 0.10
	},{
		date: 202012,
		threeMonth: 0.09,
		sixMonth: 0.09,
		oneYear: 0.10
	},{
		date: 202011,
		threeMonth: 0.08,
		sixMonth: 0.09,
		oneYear: 0.11
	},{
		date: 202010,
		threeMonth: 0.09,
		sixMonth: 0.11,
		oneYear: 0.13
	},{
		date: 202009,
		threeMonth: 0.10,
		sixMonth: 0.11,
		oneYear: 0.12
	},{
		date: 202008,
		threeMonth: 0.11,
		sixMonth: 0.13,
		oneYear: 0.12
	},{
		date: 202007,
		threeMonth: 0.09,
		sixMonth: 0.10,
		oneYear: 0.11
	},{
		date: 202006,
		threeMonth: 0.16,
		sixMonth: 0.18,
		oneYear: 0.16
	},{
		date: 202005,
		threeMonth: 0.14,
		sixMonth: 0.18,
		oneYear: 0.17
	},{
		date: 202004,
		threeMonth: 0.09,
		sixMonth: 0.11,
		oneYear: 0.16
	},{
		date: 202003,
		threeMonth: 0.11,
		sixMonth: 0.15,
		oneYear: 0.17
	},{
		date: 202002,
		threeMonth: 1.27,
		sixMonth: 1.11,
		oneYear: 0.97
	},{
		date: 202001,
		threeMonth: 1.55,
		sixMonth: 1.54,
		oneYear: 1.45
	},{
		date: 201912,
		threeMonth: 1.55,
		sixMonth: 1.60,
		oneYear: 1.59
	},{
		date: 201911,
		threeMonth: 1.59,
		sixMonth: 1.63,
		oneYear: 1.60
	},{
		date: 201910,
		threeMonth: 1.54,
		sixMonth: 1.57,
		oneYear: 1.53
	},{
		date: 201909,
		threeMonth: 1.88,
		sixMonth: 1.83,
		oneYear: 1.75
	},{
		date: 201908,
		threeMonth: 1.99,
		sixMonth: 1.89,
		oneYear: 1.76
	},{
		date: 201907,
		threeMonth: 2.08,
		sixMonth: 2.10,
		oneYear: 2.00
	},{
		date: 201906,
		threeMonth: 2.12,
		sixMonth: 2.09,
		oneYear: 1.92
	},{
		date: 201905,
		threeMonth: 2.35,
		sixMonth: 2.35,
		oneYear: 2.21
	},{
		date: 201904,
		threeMonth: 2.43,
		sixMonth: 2.46,
		oneYear: 2.39
	},{
		date: 201903,
		threeMonth: 2.40,
		sixMonth: 2.44,
		oneYear: 2.40
	},{
		date: 201902,
		threeMonth: 2.45,
		sixMonth: 2.50,
		oneYear: 2.54
	},{
		date: 201901,
		threeMonth: 2.41,
		sixMonth: 2.46,
		oneYear: 2.55
	},{
		date: 201812,
		threeMonth: 2.45,
		sixMonth: 2.56,
		oneYear: 2.63
	},{
		date: 201811,
		threeMonth: 2.37,
		sixMonth: 2.52,
		oneYear: 2.70
	},{
		date: 201810,
		threeMonth: 2.34,
		sixMonth: 2.49,
		oneYear: 2.69
	},{
		date: 201809,
		threeMonth: 2.19,
		sixMonth: 2.36,
		oneYear: 2.59
	},{
		date: 201808,
		threeMonth: 2.11,
		sixMonth: 2.28,
		oneYear: 2.46
	},{
		date: 201807,
		threeMonth: 2.03,
		sixMonth: 2.21,
		oneYear: 2.44
	},{
		date: 201806,
		threeMonth: 1.93,
		sixMonth: 2.11,
		oneYear: 2.33
	},{
		date: 201805,
		threeMonth: 1.93,
		sixMonth: 2.08,
		oneYear: 2.23
	},{
		date: 201804,
		threeMonth: 1.87,
		sixMonth: 2.04,
		oneYear: 2.24
	},{
		date: 201803,
		threeMonth: 1.73,
		sixMonth: 1.93,
		oneYear: 2.09
	},{
		date: 201802,
		threeMonth: 1.65,
		sixMonth: 1.86,
		oneYear: 2.07
	},{
		date: 201801,
		threeMonth: 1.46,
		sixMonth: 1.66,
		oneYear: 1.90
	},{
		date: 201712,
		threeMonth: 1.39,
		sixMonth: 1.53,
		oneYear: 1.76
	},{
		date: 201711,
		threeMonth: 1.27,
		sixMonth: 1.44,
		oneYear: 1.62
	},{
		date: 201710,
		threeMonth: 1.15,
		sixMonth: 1.28,
		oneYear: 1.43
	},{
		date: 201709,
		threeMonth: 1.06,
		sixMonth: 1.20,
		oneYear: 1.31
	},{
		date: 201708,
		threeMonth: 1.01,
		sixMonth: 1.08,
		oneYear: 1.23
	},{
		date: 201707,
		threeMonth: 1.07,
		sixMonth: 1.13,
		oneYear: 1.23
	},{
		date: 201706,
		threeMonth: 1.03,
		sixMonth: 1.14,
		oneYear: 1.24
	},{
		date: 201705,
		threeMonth: 0.98,
		sixMonth: 1.08,
		oneYear: 1.17
	},{
		date: 201704,
		threeMonth: 0.80,
		sixMonth: 0.99,
		oneYear: 1.07
	},{
		date: 201703,
		threeMonth: 0.76,
		sixMonth: 0.91,
		oneYear: 1.03
	},{
		date: 201702,
		threeMonth: 0.53,
		sixMonth: 0.69,
		oneYear: 0.88
	},{
		date: 201701,
		threeMonth: 0.52,
		sixMonth: 0.64,
		oneYear: 0.84
	},{
		date: 201612,
		threeMonth: 0.51,
		sixMonth: 0.62,
		oneYear: 0.85
	},{
		date: 201611,
		threeMonth: 0.48,
		sixMonth: 0.62,
		oneYear: 0.80
	},{
		date: 201610,
		threeMonth: 0.34,
		sixMonth: 0.51,
		oneYear: 0.66
	},{
		date: 201609,
		threeMonth: 0.29,
		sixMonth: 0.45,
		oneYear: 0.59
	},{
		date: 201608,
		threeMonth: 0.33,
		sixMonth: 0.47,
		oneYear: 0.61
	},{
		date: 201607,
		threeMonth: 0.28,
		sixMonth: 0.38,
		oneYear: 0.50
	},{
		date: 201606,
		threeMonth: 0.26,
		sixMonth: 0.36,
		oneYear: 0.45
	},{
		date: 201605,
		threeMonth: 0.34,
		sixMonth: 0.49,
		oneYear: 0.68
	},{
		date: 201604,
		threeMonth: 0.22,
		sixMonth: 0.40,
		oneYear: 0.56
	},{
		date: 201603,
		threeMonth: 0.21,
		sixMonth: 0.39,
		oneYear: 0.59
	},{
		date: 201602,
		threeMonth: 0.33,
		sixMonth: 0.49,
		oneYear: 0.62
	},{
		date: 201601,
		threeMonth: 0.33,
		sixMonth: 0.43,
		oneYear: 0.47
	},{
		date: 201512,
		threeMonth: 0.16,
		sixMonth: 0.49,
		oneYear: 0.65
	},{
		date: 201511,
		threeMonth: 0.22,
		sixMonth: 0.42,
		oneYear: 0.51
	},{
		date: 201510,
		threeMonth: 0.08,
		sixMonth: 0.23,
		oneYear: 0.34
	},{
		date: 201509,
		threeMonth: 0.00,
		sixMonth: 0.08,
		oneYear: 0.33
	},{
		date: 201508,
		threeMonth: 0.08,
		sixMonth: 0.27,
		oneYear: 0.39
	},{
		date: 201507,
		threeMonth: 0.08,
		sixMonth: 0.14,
		oneYear: 0.33
	},{
		date: 201506,
		threeMonth: 0.01,
		sixMonth: 0.11,
		oneYear: 0.28
	},{
		date: 201505,
		threeMonth: 0.01,
		sixMonth: 0.06,
		oneYear: 0.26
	},{
		date: 201504,
		threeMonth: 0.01,
		sixMonth: 0.06,
		oneYear: 0.24
	},{
		date: 201503,
		threeMonth: 0.03,
		sixMonth: 0.14,
		oneYear: 0.26
	},{
		date: 201502,
		threeMonth: 0.02,
		sixMonth: 0.07,
		oneYear: 0.22
	},{
		date: 201501,
		threeMonth: 0.02,
		sixMonth: 0.07,
		oneYear: 0.18
	},{
		date: 201412,
		threeMonth: 0.04,
		sixMonth: 0.12,
		oneYear: 0.25
	},{
		date: 201411,
		threeMonth: 0.02,
		sixMonth: 0.07,
		oneYear: 0.13
	},{
		date: 201410,
		threeMonth: 0.01,
		sixMonth: 0.05,
		oneYear: 0.11
	},{
		date: 201409,
		threeMonth: 0.02,
		sixMonth: 0.03,
		oneYear: 0.13
	},{
		date: 201408,
		threeMonth: 0.03,
		sixMonth: 0.05,
		oneYear: 0.09
	},{
		date: 201407,
		threeMonth: 0.03,
		sixMonth: 0.05,
		oneYear: 0.12
	},{
		date: 201406,
		threeMonth: 0.04,
		sixMonth: 0.07,
		oneYear: 0.11
	},{
		date: 201405,
		threeMonth: 0.04,
		sixMonth: 0.06,
		oneYear: 0.10
	},{
		date: 201404,
		threeMonth: 0.03,
		sixMonth: 0.05,
		oneYear: 0.11
	},{
		date: 201403,
		threeMonth: 0.05,
		sixMonth: 0.07,
		oneYear: 0.13
	},{
		date: 201402,
		threeMonth: 0.05,
		sixMonth: 0.08,
		oneYear: 0.12
	},{
		date: 201401,
		threeMonth: 0.02,
		sixMonth: 0.06,
		oneYear: 0.10
	},{
		date: 201312,
		threeMonth: 0.07,
		sixMonth: 0.10,
		oneYear: 0.13
	},{
		date: 201311,
		threeMonth: 0.06,
		sixMonth: 0.11,
		oneYear: 0.13
	},{
		date: 201310,
		threeMonth: 0.04,
		sixMonth: 0.08,
		oneYear: 0.10
	},{
		date: 201309,
		threeMonth: 0.02,
		sixMonth: 0.04,
		oneYear: 0.10
	},{
		date: 201308,
		threeMonth: 0.03,
		sixMonth: 0.05,
		oneYear: 0.13
	},{
		date: 201307,
		threeMonth: 0.04,
		sixMonth: 0.08,
		oneYear: 0.11
	},{
		date: 201306,
		threeMonth: 0.04,
		sixMonth: 0.10,
		oneYear: 0.15
	},{
		date: 201305,
		threeMonth: 0.04,
		sixMonth: 0.07,
		oneYear: 0.14
	},{
		date: 201304,
		threeMonth: 0.05,
		sixMonth: 0.09,
		oneYear: 0.11
	},{
		date: 201303,
		threeMonth: 0.07,
		sixMonth: 0.11,
		oneYear: 0.14
	},{
		date: 201302,
		threeMonth: 0.11,
		sixMonth: 0.13,
		oneYear: 0.17
	},{
		date: 201301,
		threeMonth: 0.07,
		sixMonth: 0.12,
		oneYear: 0.15
	},{
		date: 201212,
		threeMonth: 0.05,
		sixMonth: 0.11,
		oneYear: 0.16
	},{
		date: 201211,
		threeMonth: 0.08,
		sixMonth: 0.13,
		oneYear: 0.18
	},{
		date: 201210,
		threeMonth: 0.11,
		sixMonth: 0.16,
		oneYear: 0.18
	},{
		date: 201209,
		threeMonth: 0.10,
		sixMonth: 0.14,
		oneYear: 0.17
	},{
		date: 201208,
		threeMonth: 0.09,
		sixMonth: 0.14,
		oneYear: 0.06
	},{
		date: 201207,
		threeMonth: 0.11,
		sixMonth: 0.14,
		oneYear: 0.16
	},{
		date: 201206,
		threeMonth: 0.09,
		sixMonth: 0.16,
		oneYear: 0.21
	},{
		date: 201205,
		threeMonth: 0.07,
		sixMonth: 0.14,
		oneYear: 0.18
	},{
		date: 201204,
		threeMonth: 0.10,
		sixMonth: 0.15,
		oneYear: 0.20
	},{
		date: 201203,
		threeMonth: 0.07,
		sixMonth: 0.15,
		oneYear: 0.19
	},{
		date: 201202,
		threeMonth: 0.08,
		sixMonth: 0.13,
		oneYear: 0.18
	},{
		date: 201201,
		threeMonth: 0.06,
		sixMonth: 0.08,
		oneYear: 0.13
	},{
		date: 201112,
		threeMonth: 0.02,
		sixMonth: 0.06,
		oneYear: 0.12
	},{
		date: 201111,
		threeMonth: 0.01,
		sixMonth: 0.06,
		oneYear: 0.12
	},{
		date: 201110,
		threeMonth: 0.01,
		sixMonth: 0.06,
		oneYear: 0.12
	},{
		date: 201109,
		threeMonth: 0.02,
		sixMonth: 0.06,
		oneYear: 0.13
	},{
		date: 201108,
		threeMonth: 0.02,
		sixMonth: 0.05,
		oneYear: 0.10
	},{
		date: 201107,
		threeMonth: 0.10,
		sixMonth: 0.16,
		oneYear: 0.20
	},{
		date: 201106,
		threeMonth: 0.03,
		sixMonth: 0.10,
		oneYear: 0.19
	},{
		date: 201105,
		threeMonth: 0.06,
		sixMonth: 0.12,
		oneYear: 0.18
	},{
		date: 201104,
		threeMonth: 0.04,
		sixMonth: 0.11,
		oneYear: 0.22
	},{
		date: 201103,
		threeMonth: 0.09,
		sixMonth: 0.17,
		oneYear: 0.30
	},{
		date: 201102,
		threeMonth: 0.15,
		sixMonth: 0.18,
		oneYear: 0.25
	},{
		date: 201101,
		threeMonth: 0.15,
		sixMonth: 0.17,
		oneYear: 0.26
	},{
		date: 201012,
		threeMonth: 0.12,
		sixMonth: 0.19,
		oneYear: 0.29
	},{
		date: 201011,
		threeMonth: 0.17,
		sixMonth: 0.21,
		oneYear: 0.27
	},{
		date: 201010,
		threeMonth: 0.12,
		sixMonth: 0.17,
		oneYear: 0.22
	},{
		date: 201009,
		threeMonth: 0.16,
		sixMonth: 0.19,
		oneYear: 0.27
	},{
		date: 201008,
		threeMonth: 0.14,
		sixMonth: 0.19,
		oneYear: 0.25
	},{
		date: 201007,
		threeMonth: 0.15,
		sixMonth: 0.20,
		oneYear: 0.29
	},{
		date: 201006,
		threeMonth: 0.18,
		sixMonth: 0.22,
		oneYear: 0.32
	},{
		date: 201005,
		threeMonth: 0.16,
		sixMonth: 0.22,
		oneYear: 0.34
	},{
		date: 201004,
		threeMonth: 0.16,
		sixMonth: 0.25,
		oneYear: 0.41
	},{
		date: 201003,
		threeMonth: 0.16,
		sixMonth: 0.24,
		oneYear: 0.41
	},{
		date: 201002,
		threeMonth: 0.13,
		sixMonth: 0.19,
		oneYear: 0.32
	},{
		date: 201001,
		threeMonth: 0.08,
		sixMonth: 0.15,
		oneYear: 0.30
	},{
		date: 200912,
		threeMonth: 0.06,
		sixMonth: 0.20,
		oneYear: 0.47
	},{
		date: 200911,
		threeMonth: 0.06,
		sixMonth: 0.15,
		oneYear: 0.27
	},{
		date: 200910,
		threeMonth: 0.05,
		sixMonth: 0.16,
		oneYear: 0.37
	},{
		date: 200909,
		threeMonth: 0.14,
		sixMonth: 0.18,
		oneYear: 0.40
	},{
		date: 200908,
		threeMonth: 0.15,
		sixMonth: 0.24,
		oneYear: 0.43
	},{
		date: 200907,
		threeMonth: 0.18,
		sixMonth: 0.26,
		oneYear: 0.48
	},{
		date: 200906,
		threeMonth: 0.19,
		sixMonth: 0.35,
		oneYear: 0.56
	},{
		date: 200905,
		threeMonth: 0.14,
		sixMonth: 0.30,
		oneYear: 0.47
	},{
		date: 200904,
		threeMonth: 0.14,
		sixMonth: 0.29,
		oneYear: 0.49
	},{
		date: 200903,
		threeMonth: 0.21,
		sixMonth: 0.43,
		oneYear: 0.57
	},{
		date: 200902,
		threeMonth: 0.26,
		sixMonth: 0.45,
		oneYear: 0.72
	},{
		date: 200901,
		threeMonth: 0.24,
		sixMonth: 0.36,
		oneYear: 0.51
	},{
		date: 200812,
		threeMonth: 0.11,
		sixMonth: 0.27,
		oneYear: 0.37
	},{
		date: 200811,
		threeMonth: 0.01,
		sixMonth: 0.44,
		oneYear: 0.90
	},{
		date: 200810,
		threeMonth: 0.46,
		sixMonth: 0.94,
		oneYear: 1.34
	},{
		date: 200809,
		threeMonth: 0.92,
		sixMonth: 1.60,
		oneYear: 1.78
	},{
		date: 200808,
		threeMonth: 1.72,
		sixMonth: 1.97,
		oneYear: 2.17
	},{
		date: 200807,
		threeMonth: 1.68,
		sixMonth: 1.89,
		oneYear: 2.27
	},{
		date: 200806,
		threeMonth: 1.90,
		sixMonth: 2.17,
		oneYear: 2.36
	},{
		date: 200805,
		threeMonth: 1.89,
		sixMonth: 2.01,
		oneYear: 2.22
	},{
		date: 200804,
		threeMonth: 1.43,
		sixMonth: 1.64,
		oneYear: 1.85
	},{
		date: 200803,
		threeMonth: 1.38,
		sixMonth: 1.51,
		oneYear: 1.55
	},{
		date: 200802,
		threeMonth: 1.85,
		sixMonth: 1.83,
		oneYear: 1.77
	},{
		date: 200801,
		threeMonth: 1.96,
		sixMonth: 2.07,
		oneYear: 2.11
	},{
		date: 200712,
		threeMonth: 3.36,
		sixMonth: 3.49,
		oneYear: 3.34
	},{
		date: 200711,
		threeMonth: 3.15,
		sixMonth: 3.37,
		oneYear: 3.26
	},{
		date: 200710,
		threeMonth: 3.94,
		sixMonth: 4.09,
		oneYear: 4.04
	},{
		date: 200709,
		threeMonth: 3.82,
		sixMonth: 4.09,
		oneYear: 4.05
	},{
		date: 200708,
		threeMonth: 4.01,
		sixMonth: 4.21,
		oneYear: 4.19
	},{
		date: 200707,
		threeMonth: 4.96,
		sixMonth: 4.99,
		oneYear: 4.85
	},{
		date: 200706,
		threeMonth: 4.82,
		sixMonth: 4.93,
		oneYear: 4.91
	},{
		date: 200705,
		threeMonth: 4.73,
		sixMonth: 4.96,
		oneYear: 4.95
	},{
		date: 200704,
		threeMonth: 4.91,
		sixMonth: 5.03,
		oneYear: 4.89
	},{
		date: 200703,
		threeMonth: 5.04,
		sixMonth: 5.06,
		oneYear: 4.90
	},{
		date: 200702,
		threeMonth: 5.16,
		sixMonth: 5.12,
		oneYear: 4.96
	},{
		date: 200701,
		threeMonth: 5.12,
		sixMonth: 5.16,
		oneYear: 5.09
	},{
		date: 200612,
		threeMonth: 5.02,
		sixMonth: 5.09,
		oneYear: 5.00
	},{
		date: 200611,
		threeMonth: 5.03,
		sixMonth: 5.10,
		oneYear: 4.94
	},{
		date: 200610,
		threeMonth: 5.08,
		sixMonth: 5.13,
		oneYear: 4.99
	},{
		date: 200609,
		threeMonth: 4.89,
		sixMonth: 5.02,
		oneYear: 4.91
	},{
		date: 200608,
		threeMonth: 5.05,
		sixMonth: 5.11,
		oneYear: 5.01
	},{
		date: 200607,
		threeMonth: 5.10,
		sixMonth: 5.18,
		oneYear: 5.11
	},{
		date: 200606,
		threeMonth: 5.01,
		sixMonth: 5.24,
		oneYear: 5.21
	},{
		date: 200605,
		threeMonth: 4.86,
		sixMonth: 5.08,
		oneYear: 5.07
	},{
		date: 200604,
		threeMonth: 4.77,
		sixMonth: 4.91,
		oneYear: 4.90
	},{
		date: 200603,
		threeMonth: 4.63,
		sixMonth: 4.81,
		oneYear: 4.82
	},{
		date: 200602,
		threeMonth: 4.62,
		sixMonth: 4.74,
		oneYear: 4.73
	},{
		date: 200601,
		threeMonth: 4.47,
		sixMonth: 4.59,
		oneYear: 4.58
	},{
		date: 200512,
		threeMonth: 4.08,
		sixMonth: 4.37,
		oneYear: 4.38
	},{
		date: 200511,
		threeMonth: 3.95,
		sixMonth: 4.31,
		oneYear: 4.34
	},{
		date: 200510,
		threeMonth: 3.98,
		sixMonth: 4.26,
		oneYear: 4.31
	},{
		date: 200509,
		threeMonth: 3.55,
		sixMonth: 3.93,
		oneYear: 4.01
	},{
		date: 200508,
		threeMonth: 3.52,
		sixMonth: 3.74,
		oneYear: 3.77
	},{
		date: 200507,
		threeMonth: 3.42,
		sixMonth: 3.69,
		oneYear: 3.80
	},{
		date: 200506,
		threeMonth: 3.13,
		sixMonth: 3.34,
		oneYear: 3.45
	},{
		date: 200505,
		threeMonth: 2.99,
		sixMonth: 3.18,
		oneYear: 3.32
	},{
		date: 200504,
		threeMonth: 2.90,
		sixMonth: 3.17,
		oneYear: 3.33
	},{
		date: 200503,
		threeMonth: 2.79,
		sixMonth: 3.13,
		oneYear: 3.35
	},{
		date: 200502,
		threeMonth: 2.76,
		sixMonth: 3.01,
		oneYear: 3.20
	},{
		date: 200501,
		threeMonth: 2.51,
		sixMonth: 2.79,
		oneYear: 2.96
	},{
		date: 200412,
		threeMonth: 2.22,
		sixMonth: 2.59,
		oneYear: 2.75
	},{
		date: 200411,
		threeMonth: 2.23,
		sixMonth: 2.44,
		oneYear: 2.63
	},{
		date: 200410,
		threeMonth: 1.91,
		sixMonth: 2.13,
		oneYear: 2.28
	},{
		date: 200409,
		threeMonth: 1.71,
		sixMonth: 2.00,
		oneYear: 2.21
	},{
		date: 200408,
		threeMonth: 1.59,
		sixMonth: 1.79,
		oneYear: 1.99
	},{
		date: 200407,
		threeMonth: 1.45,
		sixMonth: 1.77,
		oneYear: 2.13
	},{
		date: 200406,
		threeMonth: 1.33,
		sixMonth: 1.68,
		oneYear: 2.09
	},{
		date: 200405,
		threeMonth: 1.08,
		sixMonth: 1.39,
		oneYear: 1.83
	},{
		date: 200404,
		threeMonth: 0.98,
		sixMonth: 1.17,
		oneYear: 1.55
	},{
		date: 200403,
		threeMonth: 0.95,
		sixMonth: 1.01,
		oneYear: 1.20
	},{
		date: 200402,
		threeMonth: 0.96,
		sixMonth: 1.01,
		oneYear: 1.21
	},{
		date: 200401,
		threeMonth: 0.92,
		sixMonth: 1.01,
		oneYear: 1.28
	},{
		date: 200312,
		threeMonth: 0.95,
		sixMonth: 1.02,
		oneYear: 1.26
	},{
		date: 200311,
		threeMonth: 0.93,
		sixMonth: 1.04,
		oneYear: 1.39
	},{
		date: 200310,
		threeMonth: 0.96,
		sixMonth: 1.04,
		oneYear: 1.31
	},{
		date: 200309,
		threeMonth: 0.95,
		sixMonth: 1.01,
		oneYear: 1.15
	},{
		date: 200308,
		threeMonth: 0.98,
		sixMonth: 1.06,
		oneYear: 1.35
	},{
		date: 200307,
		threeMonth: 0.96,
		sixMonth: 1.02,
		oneYear: 1.28
	},{
		date: 200306,
		threeMonth: 0.90,
		sixMonth: 0.98,
		oneYear: 1.09
	},{
		date: 200305,
		threeMonth: 1.11,
		sixMonth: 1.09,
		oneYear: 1.13
	},{
		date: 200304,
		threeMonth: 1.13,
		sixMonth: 1.15,
		oneYear: 1.22
	},{
		date: 200303,
		threeMonth: 1.14,
		sixMonth: 1.13,
		oneYear: 1.19
	},{
		date: 200302,
		threeMonth: 1.20,
		sixMonth: 1.19,
		oneYear: 1.24
	},{
		date: 200301,
		threeMonth: 1.18,
		sixMonth: 1.19,
		oneYear: 1.31
	},{
		date: 200212,
		threeMonth: 1.22,
		sixMonth: 1.23,
		oneYear: 1.32
	},{
		date: 200211,
		threeMonth: 1.22,
		sixMonth: 1.30,
		oneYear: 1.56
	},{
		date: 200210,
		threeMonth: 1.44,
		sixMonth: 1.43,
		oneYear: 1.46
	},{
		date: 200209,
		threeMonth: 1.57,
		sixMonth: 1.51,
		oneYear: 1.53
	},{
		date: 200208,
		threeMonth: 1.69,
		sixMonth: 1.67,
		oneYear: 1.74
	},{
		date: 200207,
		threeMonth: 1.71,
		sixMonth: 1.70,
		oneYear: 1.80
	},{
		date: 200206,
		threeMonth: 1.70,
		sixMonth: 1.75,
		oneYear: 2.06
	},{
		date: 200205,
		threeMonth: 1.74,
		sixMonth: 1.91,
		oneYear: 2.34
	},{
		date: 200204,
		threeMonth: 1.77,
		sixMonth: 1.91,
		oneYear: 2.35
	},{
		date: 200203,
		threeMonth: 1.79,
		sixMonth: 2.12,
		oneYear: 2.70
	},{
		date: 200202,
		threeMonth: 1.79,
		sixMonth: 1.87,
		oneYear: 2.25
	},{
		date: 200201,
		threeMonth: 1.76,
		sixMonth: 1.89,
		oneYear: 2.29
	},{
		date: 200112,
		threeMonth: 1.74,
		sixMonth: 1.83,
		oneYear: 2.17
	},{
		date: 200111,
		threeMonth: 1.78,
		sixMonth: 1.79,
		oneYear: 2.06
	},{
		date: 200110,
		threeMonth: 2.05,
		sixMonth: 1.95,
		oneYear: 2.07
	},{
		date: 200109,
		threeMonth: 2.40,
		sixMonth: 2.36,
		oneYear: 2.49
	},{
		date: 200108,
		threeMonth: 3.37,
		sixMonth: 3.31,
		oneYear: 3.41
	},{
		date: 200107,
		threeMonth: 3.54,
		sixMonth: 3.47,
		oneYear: 3.53
	},{
		date: 200106,
		threeMonth: 3.65,
		sixMonth: 3.63,
		oneYear: 3.72
	},{
		date: 200105,
		threeMonth: 3.63,
		sixMonth: 3.59,
		oneYear: 3.63
	},{
		date: 200104,
		threeMonth: 3.95,
		sixMonth: 3.97,
		oneYear: 3.94
	},{
		date: 200103,
		threeMonth: 4.30,
		sixMonth: 4.09,
		oneYear: 4.09
	},{
		date: 200102,
		threeMonth: 4.85,
		sixMonth: 4.70,
		oneYear: 4.47
	},{
		date: 200101,
		threeMonth: 4.99,
		sixMonth: 4.83,
		oneYear: 4.60
	},{
		date: 200012,
		threeMonth: 5.89,
		sixMonth: 5.70,
		oneYear: 5.32
	},{
		date: 200011,
		threeMonth: 6.21,
		sixMonth: 6.18,
		oneYear: 5.92
	},{
		date: 200010,
		threeMonth: 6.38,
		sixMonth: 6.36,
		oneYear: 6.12
	},{
		date: 200009,
		threeMonth: 6.23,
		sixMonth: 6.28,
		oneYear: 6.07
	},{
		date: 200008,
		threeMonth: 6.31,
		sixMonth: 6.38,
		oneYear: 6.22
	},{
		date: 200007,
		threeMonth: 6.27,
		sixMonth: 6.42,
		oneYear: 6.07
	},{
		date: 200006,
		threeMonth: 5.88,
		sixMonth: 6.23,
		oneYear: 6.08
	},{
		date: 200005,
		threeMonth: 5.63,
		sixMonth: 6.35,
		oneYear: 6.37
	},{
		date: 200004,
		threeMonth: 5.82,
		sixMonth: 6.12,
		oneYear: 6.24
	},{
		date: 200003,
		threeMonth: 5.88,
		sixMonth: 6.15,
		oneYear: 6.28
	},{
		date: 200002,
		threeMonth: 5.78,
		sixMonth: 6.02,
		oneYear: 6.20
	},{
		date: 200001,
		threeMonth: 5.76,
		sixMonth: 5.97,
		oneYear: 6.30
	},{
		date: 199912,
		threeMonth: 5.33,
		sixMonth: 5.74,
		oneYear: 5.98
	},{
		date: 199911,
		threeMonth: 5.30,
		sixMonth: 5.57,
		oneYear: 5.70
	},{
		date: 199910,
		threeMonth: 5.12,
		sixMonth: 5.28,
		oneYear: 5.43
	},{
		date: 199909,
		threeMonth: 4.88,
		sixMonth: 4.99,
		oneYear: 5.22
	},{
		date: 199908,
		threeMonth: 4.98,
		sixMonth: 5.21,
		oneYear: 5.30
	},{
		date: 199907,
		threeMonth: 4.75,
		sixMonth: 4.85,
		oneYear: 5.13
	},{
		date: 199906,
		threeMonth: 4.78,
		sixMonth: 5.04,
		oneYear: 5.07
	},{
		date: 199905,
		threeMonth: 4.66,
		sixMonth: 4.83,
		oneYear: 4.97
	},{
		date: 199904,
		threeMonth: 4.55,
		sixMonth: 4.66,
		oneYear: 4.78
	},{
		date: 199903,
		threeMonth: 4.49,
		sixMonth: 4.53,
		oneYear: 4.72
	},{
		date: 199902,
		threeMonth: 4.66,
		sixMonth: 4.70,
		oneYear: 4.88
	},{
		date: 199901,
		threeMonth: 4.48,
		sixMonth: 4.47,
		oneYear: 4.51
	},{
		date: 199812,
		threeMonth: 4.48,
		sixMonth: 4.55,
		oneYear: 4.53
	},{
		date: 199811,
		threeMonth: 4.57,
		sixMonth: 4.58,
		oneYear: 4.53
	},{
		date: 199810,
		threeMonth: 4.33,
		sixMonth: 4.36,
		oneYear: 4.18
	},{
		date: 199809,
		threeMonth: 4.37,
		sixMonth: 4.49,
		oneYear: 4.41
	},{
		date: 199808,
		threeMonth: 4.96,
		sixMonth: 5.03,
		oneYear: 4.95
	},{
		date: 199807,
		threeMonth: 5.10,
		sixMonth: 5.21,
		oneYear: 5.38
	},{
		date: 199806,
		threeMonth: 5.10,
		sixMonth: 5.24,
		oneYear: 5.38
	},{
		date: 199805,
		threeMonth: 5.03,
		sixMonth: 5.33,
		oneYear: 5.42
	},{
		date: 199804,
		threeMonth: 5.00,
		sixMonth: 5.24,
		oneYear: 5.40
	},{
		date: 199803,
		threeMonth: 5.16,
		sixMonth: 5.27,
		oneYear: 5.41
	},{
		date: 199802,
		threeMonth: 5.32,
		sixMonth: 5.33,
		oneYear: 5.41
	},{
		date: 199801,
		threeMonth: 5.19,
		sixMonth: 5.24,
		oneYear: 5.24
	},{
		date: 199712,
		threeMonth: 5.36,
		sixMonth: 5.45,
		oneYear: 5.51
	},{
		date: 199711,
		threeMonth: 5.22,
		sixMonth: 5.43,
		oneYear: 5.52
	},{
		date: 199710,
		threeMonth: 5.21,
		sixMonth: 5.32,
		oneYear: 5.36
	},{
		date: 199709,
		threeMonth: 5.06,
		sixMonth: 5.28,
		oneYear: 5.47
	},{
		date: 199708,
		threeMonth: 5.24,
		sixMonth: 5.39,
		oneYear: 5.59
	},{
		date: 199707,
		threeMonth: 5.25,
		sixMonth: 5.33,
		oneYear: 5.45
	},{
		date: 199706,
		threeMonth: 5.25,
		sixMonth: 5.34,
		oneYear: 5.67
	},{
		date: 199705,
		threeMonth: 4.98,
		sixMonth:5.46,
		oneYear: 5.78
	},{
		date: 199704,
		threeMonth: 5.28,
		sixMonth: 5.53,
		oneYear: 5.90
	},{
		date: 199703,
		threeMonth: 5.35,
		sixMonth: 5.55,
		oneYear: 6.02
	},{
		date: 199702,
		threeMonth: 5.22,
		sixMonth: 5.39,
		oneYear: 5.67
	},{
		date: 199701,
		threeMonth: 5.15,
		sixMonth: 5.28,
		oneYear: 5.58
	},{
		date: 199612,
		threeMonth: 5.21,
		sixMonth: 5.33,
		oneYear: 5.51
	},{
		date: 199611,
		threeMonth: 5.13,
		sixMonth: 5.25,
		oneYear: 5.38
	},{
		date: 199610,
		threeMonth: 5.17,
		sixMonth: 5.30,
		oneYear: 5.44
	},{
		date: 199609,
		threeMonth: 5.14,
		sixMonth: 5.37,
		oneYear: 5.71
	},{
		date: 199608,
		threeMonth: 5.29,
		sixMonth: 5.49,
		oneYear: 5.91
	},{
		date: 199607,
		threeMonth: 5.32,
		sixMonth: 5.47,
		oneYear: 5.85
	},{
		date: 199606,
		threeMonth: 5.18,
		sixMonth: 5.37,
		oneYear: 5.70
	},{
		date: 199605,
		threeMonth: 5.18,
		sixMonth: 5.36,
		oneYear: 5.77
	},{
		date: 199604,
		threeMonth: 5.14,
		sixMonth: 5.30,
		oneYear: 5.62
	},{
		date: 199603,
		threeMonth: 5.13,
		sixMonth: 5.20,
		oneYear: 5.41
	},{
		date: 199602,
		threeMonth: 5.02,
		sixMonth: 5.05,
		oneYear: 5.23
	},{
		date: 199601,
		threeMonth: 5.05,
		sixMonth: 4.97,
		oneYear: 4.90
	},{
		date: 199512,
		threeMonth: 5.10,
		sixMonth: 5.17,
		oneYear: 5.18
	},{
		date: 199511,
		threeMonth: 5.48,
		sixMonth: 5.46,
		oneYear: 5.36
	},{
		date: 199510,
		threeMonth: 5.48,
		sixMonth: 5.55,
		oneYear: 5.55
	},{
		date: 199509,
		threeMonth: 5.40,
		sixMonth: 5.57,
		oneYear: 5.65
	},{
		date: 199508,
		threeMonth: 5.45,
		sixMonth: 5.53,
		oneYear: 5.65
	},{
		date: 199507,
		threeMonth: 5.60,
		sixMonth: 5.63,
		oneYear: 5.67
	},{
		date: 199506,
		threeMonth: 5.60,
		sixMonth: 5.59,
		oneYear: 5.65
	},{
		date: 199505,
		threeMonth: 5.81,
		sixMonth: 5.83,
		oneYear: 5.80
	},{
		date: 199504,
		threeMonth: 5.87,
		sixMonth: 6.08,
		oneYear: 6.32
	},{
		date: 199503,
		threeMonth: 5.88,
		sixMonth: 6.13,
		oneYear: 6.49
	},{
		date: 199502,
		threeMonth: 5.94,
		sixMonth: 6.19,
		oneYear: 6.44
	},{
		date: 199501,
		threeMonth: 6.00,
		sixMonth: 6.40,
		oneYear: 6.84
	},{
		date: 199412,
		threeMonth: 5.68,
		sixMonth: 6.51,
		oneYear: 7.20
	},{
		date: 199411,
		threeMonth: 5.72,
		sixMonth: 6.22,
		oneYear: 6.91
	},{
		date: 199410,
		threeMonth: 5.20,
		sixMonth: 5.72,
		oneYear: 6.18
	},{
		date: 199409,
		threeMonth: 4.80,
		sixMonth: 5.43,
		oneYear: 5.96
	},{
		date: 199408,
		threeMonth: 4.68,
		sixMonth: 5.03,
		oneYear: 5.56
	},{
		date: 199407,
		threeMonth: 4.39,
		sixMonth: 4.87,
		oneYear: 5.37
	},{
		date: 199406,
		threeMonth: 4.26,
		sixMonth: 4.83,
		oneYear: 5.51
	},{
		date: 199405,
		threeMonth: 4.31,
		sixMonth: 4.87,
		oneYear: 5.38
	},{
		date: 199404,
		threeMonth: 3.97,
		sixMonth: 4.45,
		oneYear: 5.07
	},{
		date: 199403,
		threeMonth: 3.56,
		sixMonth: 3.92,
		oneYear: 4.50
	},{
		date: 199402,
		threeMonth: 3.47,
		sixMonth: 3.72,
		oneYear: 4.03
	},{
		date: 199401,
		threeMonth: 3.05,
		sixMonth: 3.25,
		oneYear: 3.53
	},{
		date: 199312,
		threeMonth: 3.07,
		sixMonth: 3.30,
		oneYear: 3.63
	},{
		date: 199311,
		threeMonth: 3.21,
		sixMonth: 3.40,
		oneYear: 3.65
	},{
		date: 199310,
		threeMonth: 3.10,
		sixMonth: 3.28,
		oneYear: 3.47
	},{
		date: 199309,
		threeMonth: 2.98,
		sixMonth: 3.13,
		oneYear: 3.39
	},{
		date: 199308,
		threeMonth: 3.08,
		sixMonth: 3.21,
		oneYear: 3.38
	},{
		date: 199307,
		threeMonth: 3.10,
		sixMonth: 3.28,
		oneYear: 3.53
	},{
		date: 199306,
		threeMonth: 3.10,
		sixMonth: 3.22,
		oneYear: 3.45
	},{
		date: 199305,
		threeMonth: 3.13,
		sixMonth: 3.32,
		oneYear: 3.62
	},{
		date: 199304,
		threeMonth: 2.97,
		sixMonth: 3.07,
		oneYear: 3.26
	},{
		date: 199303,
		threeMonth: 2.95,
		sixMonth: 3.09,
		oneYear: 3.32
	},{
		date: 199302,
		threeMonth: 3.01,
		sixMonth: 3.14,
		oneYear: 3.32
	},{
		date: 199301,
		threeMonth: 2.96,
		sixMonth: 3.16,
		oneYear: 3.39
	},{
		date: 199212,
		threeMonth: 3.15,
		sixMonth: 3.38,
		oneYear: 3.61
	},{
		date: 199211,
		threeMonth: 3.38,
		sixMonth: 3.58,
		oneYear: 3.83
	},{
		date: 199210,
		threeMonth: 3.03,
		sixMonth: 3.29,
		oneYear: 3.54
	},{
		date: 199209,
		threeMonth: 2.75,
		sixMonth: 2.92,
		oneYear: 3.06
	},{
		date: 199208,
		threeMonth: 3.23,
		sixMonth: 3.35,
		oneYear: 3.47
	},{
		date: 199207,
		threeMonth: 3.25,
		sixMonth: 3.38,
		oneYear: 3.62
	},{
		date: 199206,
		threeMonth: 3.65,
		sixMonth: 3.77,
		oneYear: 4.05
	},{
		date: 199205,
		threeMonth: 3.79,
		sixMonth: 3.96,
		oneYear: 4.24
	},{
		date: 199204,
		threeMonth: 3.79,
		sixMonth: 3.97,
		oneYear: 4.40
	},{
		date: 199203,
		threeMonth: 4.15,
		sixMonth: 4.32,
		oneYear: 5.54
	},{
		date: 199202,
		threeMonth: 4.03,
		sixMonth: 4.14,
		oneYear: 4.35
	},{
		date: 199201,
		threeMonth: 3.94,
		sixMonth: 4.07,
		oneYear: 4.23
	},{
		date: 199112,
		threeMonth: 3.96,
		sixMonth: 4.00,
		oneYear: 4.12
	},{
		date: 199111,
		threeMonth: 4.47,
		sixMonth: 4.57,
		oneYear: 4.69
	},{
		date: 199110,
		threeMonth: 4.96,
		sixMonth: 5.03,
		oneYear: 5.10
	},{
		date: 199109,
		threeMonth: 5.26,
		sixMonth: 5.34,
		oneYear: 5.42
	},{
		date: 199108,
		threeMonth: 5.49,
		sixMonth: 5.60,
		oneYear: 5.72
	},{
		date: 199107,
		threeMonth: 5.70,
		sixMonth: 5.93,
		oneYear: 6.19
	},{
		date: 199106,
		threeMonth: 5.71,
		sixMonth: 5.95,
		oneYear: 6.32
	},{
		date: 199105,
		threeMonth: 5.71,
		sixMonth: 5.94,
		oneYear: 6.16
	},{
		date: 199104,
		threeMonth: 5.68,
		sixMonth: 5.83,
		oneYear: 6.06
	},{
		date: 199103,
		threeMonth: 5.92,
		sixMonth: 6.05,
		oneYear: 6.28
	},{
		date: 199102,
		threeMonth: 6.22,
		sixMonth: 6.32,
		oneYear: 6.41
	},{
		date: 199101,
		threeMonth: 6.37,
		sixMonth: 6.49,
		oneYear: 6.51
	},{
		date: 199012,
		threeMonth: 6.63,
		sixMonth: 6.73,
		oneYear: 6.82
	},{
		date: 199011,
		threeMonth: 7.24,
		sixMonth: 7.36,
		oneYear: 7.31
	},{
		date: 199010,
		threeMonth: 7.34,
		sixMonth: 7.46,
		oneYear: 7.43
	},{
		date: 199009,
		threeMonth: 7.37,
		sixMonth: 7.54,
		oneYear: 7.69
	},{
		date: 199008,
		threeMonth: 7.63,
		sixMonth: 7.74,
		oneYear: 7.76
	},{
		date: 199007,
		threeMonth: 7.74,
		sixMonth: 7.72,
		oneYear: 7.72
	},{
		date: 199006,
		threeMonth: 8.00,
		sixMonth: 8.02,
		oneYear: 8.05
	},{
		date: 199005,
		threeMonth: 8.01,
		sixMonth: 8.12,
		oneYear: 8.22
	},{
		date: 199004,
		threeMonth: 8.07,
		sixMonth: 8.44,
		oneYear: 8.58
	},{
		date: 199003,
		threeMonth: 8.07,
		sixMonth: 8.24,
		oneYear: 8.35
	},{
		date: 199002,
		threeMonth: 8.04,
		sixMonth: 8.14,
		oneYear: 8.12
	},{
		date: 199001,
		threeMonth: 8.00,
		sixMonth: 8.13,
		oneYear: 8.08
	},{
		date: 198912,
		threeMonth: 7.80,
		sixMonth: 7.87,
		oneYear: 7.76
	},{
		date: 198911,
		threeMonth: 7.84,
		sixMonth: 7.78,
		oneYear: 7.72
	},{
		date: 198910,
		threeMonth: 8.04,
		sixMonth: 7.99,
		oneYear: 7.88
	},{
		date: 198909,
		threeMonth: 8.18,
		sixMonth: 8.34,
		oneYear: 8.48
	},{
		date: 198908,
		threeMonth: 8.16,
		sixMonth: 8.21,
		oneYear: 8.28
	},{
		date: 198907,
		threeMonth: 8.04,
		sixMonth: 7.83,
		oneYear: 7.65
	},{
		date: 198906,
		threeMonth: 8.26,
		sixMonth: 8.14,
		oneYear: 8.12
	},{
		date: 198905,
		threeMonth: 8.92,
		sixMonth: 8.87,
		oneYear: 8.86
	},{
		date: 198904,
		threeMonth: 8.71,
		sixMonth: 9.00,
		oneYear: 9.12
	},{
		date: 198903,
		threeMonth: 9.23,
		sixMonth: 9.54,
		oneYear: 9.64
	},{
		date: 198902,
		threeMonth: 9.03,
		sixMonth: 9.23,
		oneYear: 9.40
	},{
		date: 198901,
		threeMonth: 8.69,
		sixMonth: 8.91,
		oneYear: 9.04
	},{
		date: 198812,
		threeMonth: 8.37,
		sixMonth: 8.67,
		oneYear: 9.02
	},{
		date: 198811,
		threeMonth: 8.10,
		sixMonth: 8.42,
		oneYear: 8.62
	},{
		date: 198810,
		threeMonth: 7.62,
		sixMonth: 7.89,
		oneYear: 8.06
	},{
		date: 198809,
		threeMonth: 7.49,
		sixMonth: 7.85,
		oneYear: 8.13
	},{
		date: 198808,
		threeMonth: 7.54,
		sixMonth: 7.89,
		oneYear: 8.28
	},{
		date: 198807,
		threeMonth: 7.18,
		sixMonth: 7.50,
		oneYear: 7.90
	},{
		date: 198806,
		threeMonth: 6.77,
		sixMonth: 7.04,
		oneYear: 7.50
	},{
		date: 198805,
		threeMonth: 6.67,
		sixMonth: 7.19,
		oneYear: 7.66
	},{
		date: 198804,
		threeMonth: 6.16,
		sixMonth: 6.66,
		oneYear: 7.14
	},{
		date: 198803,
		threeMonth: 5.87,
		sixMonth: 6.32,
		oneYear: 6.76
	},{
		date: 198802,
		threeMonth: 5.80,
		sixMonth: 6.06,
		oneYear: 6.63
	},{
		date: 198801,
		threeMonth: 5.82,
		sixMonth: 6.32,
		oneYear: 6.66
	},{
		date: 198712,
		threeMonth: 5.86,
		sixMonth: 6.47,
		oneYear: 7.10
	},{
		date: 198711,
		threeMonth: 5.42,
		sixMonth: 6.41,
		oneYear: 7.00
	},{
		date: 198710,
		threeMonth: 5.45,
		sixMonth: 6.27,
		oneYear: 6.75
	},{
		date: 198709,
		threeMonth: 6.83,
		sixMonth: 7.19,
		oneYear: 7.92
	},{
		date: 198708,
		threeMonth: 6.45,
		sixMonth: 6.62,
		oneYear: 7.23
	},{
		date: 198707,
		threeMonth: 6.27,
		sixMonth: 6.46,
		oneYear: 6.89
	},{
		date: 198706,
		threeMonth: 5.91,
		sixMonth: 6.19,
		oneYear: 6.77
	},{
		date: 198705,
		threeMonth: 5.87,
		sixMonth: 6.47,
		oneYear: 6.88
	},{
		date: 198704,
		threeMonth: 5.70,
		sixMonth: 6.25,
		oneYear: 6.62
	},{
		date: 198703,
		threeMonth: 5.79,
		sixMonth: 6.01,
		oneYear: 6.15
	},{
		date: 198702,
		threeMonth: 5.60,
		sixMonth: 5.68,
		oneYear: 5.9
	},{
		date: 198701,
		threeMonth: 5.76,
		sixMonth: 5.83,
		oneYear: 5.93
	},{
		date: 198612,
		threeMonth: 5.83,
		sixMonth: 5.87,
		oneYear: 5.95
	},{
		date: 198611,
		threeMonth: 5.54,
		sixMonth: 5.65,
		oneYear: 5.73
	},{
		date: 198610,
		threeMonth: 5.34,
		sixMonth: 5.50,
		oneYear: 5.73
	},{
		date: 198609,
		threeMonth: 5.34,
		sixMonth: 5.61,
		oneYear: 5.82
	},{
		date: 198608,
		threeMonth: 5.31,
		sixMonth: 5.38,
		oneYear: 5.52
	},{
		date: 198607,
		threeMonth: 5.96,
		sixMonth: 6.06,
		oneYear: 6.20
	},{
		date: 198606,
		threeMonth: 6.13,
		sixMonth: 6.22,
		oneYear: 6.41
	},{
		date: 198605,
		threeMonth: 6.49,
		sixMonth: 6.70,
		oneYear: 6.88
	},{
		date: 198604,
		threeMonth: 6.28,
		sixMonth: 6.44,
		oneYear: 6.54
	},{
		date: 198603,
		threeMonth: 6.53,
		sixMonth: 6.57,
		oneYear: 6.72
	},{
		date: 198602,
		threeMonth: 7.24,
		sixMonth: 7.36,
		oneYear: 7.43
	},{
		date: 198601,
		threeMonth: 7.19,
		sixMonth: 7.41,
		oneYear: 7.57
	},{
		date: 198512,
		threeMonth: 7.28,
		sixMonth: 7.44,
		oneYear: 7.60
	},{
		date: 198511,
		threeMonth: 7.39,
		sixMonth: 7.63,
		oneYear: 7.85
	},{
		date: 198510,
		threeMonth: 7.42,
		sixMonth: 7.67,
		oneYear: 7.92
	},{
		date: 198509,
		threeMonth: 7.27,
		sixMonth: 7.44,
		oneYear: 7.99
	},{
		date: 198508,
		threeMonth: 7.38,
		sixMonth: 7.70,
		oneYear: 8.03
	},{
		date: 198507,
		threeMonth: 7.52,
		sixMonth: 7.83,
		oneYear: 8.12
	},{
		date: 198506,
		threeMonth: 7.05,
		sixMonth: 7.33,
		oneYear: 7.71
	},{
		date: 198505,
		threeMonth: 7.38,
		sixMonth: 7.62,
		oneYear: 7.98
	},{
		date: 198504,
		threeMonth: 8.12,
		sixMonth: 8.56,
		oneYear: 8.99
	},{
		date: 198503,
		threeMonth: 8.47,
		sixMonth: 9.06,
		oneYear: 9.49
	},{
		date: 198502,
		threeMonth: 8.81,
		sixMonth: 9.32,
		oneYear: 9.72
	},{
		date: 198501,
		threeMonth: 8.33,
		sixMonth: 8.61,
		oneYear: 9.09
	},{
		date: 198412,
		threeMonth: 8.12,
		sixMonth: 8.64,
		oneYear: 9.22
	},{
		date: 198411,
		threeMonth: 8.74,
		sixMonth: 9.18,
		oneYear: 9.71
	},{
		date: 198410,
		threeMonth: 9.35,
		sixMonth: 9.84,
		oneYear: 10.26
	},{
		date: 198409,
		threeMonth: 10.63,
		sixMonth: 11.05,
		oneYear: 11.43
	},{
		date: 198408,
		threeMonth: 11.06,
		sixMonth: 11.48,
		oneYear: 11.96
	},{
		date: 198407,
		threeMonth: 10.83,
		sixMonth: 11.40,
		oneYear: 11.86
	},{
		date: 198406,
		threeMonth: 10.31,
		sixMonth: 11.19,
		oneYear: 12.30
	},{
		date: 198405,
		threeMonth: 10.13,
		sixMonth: 11.33,
		oneYear: 12.15
	},{
		date: 198404,
		threeMonth: 10.10,
		sixMonth: 10.48,
		oneYear: 11.11
	},{
		date: 198403,
		threeMonth: 10.09,
		sixMonth: 10.49,
		oneYear: 10.80
	},{
		date: 198402,
		threeMonth: 9.49,
		sixMonth: 9.89,
		oneYear: 10.21
	},{
		date: 198401,
		threeMonth: 9.26,
		sixMonth: 9.53,
		oneYear: 9.85
	}
];

// date is at the end of the month

// FRED 3 month treasury constant maturity rate (DGS3MO); monthly, end of period
// FRED 6 month treasury constant maturity rate (DGS6MO); monthly, end of period
// FRED 1 year treasury constant maturity rate (DGS1); monthly, end of period


module.exports = treasuryBills;