(this["webpackJsonprouting-tutorial"]=this["webpackJsonprouting-tutorial"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),i=n.n(c),o=n(16),r=n.n(o),s=(n(25),n(26),n(27),n(4));function l(e){return Object(a.jsx)(s.a,{children:Object(a.jsx)(s.b.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:1},exit:{opacity:0},className:"motionDiv",children:e.content})})}var d=Object(a.jsx)("div",{children:Object(a.jsx)("h1",{children:"About page"})}),b=function(){return Object(a.jsx)(l,{content:d})},j=(n(28),n(19)),O=(n(29),n(18)),h=function(){return Object(a.jsx)(s.b.div,{variants:{collapsed:{scale:.8},open:{scale:1}},transition:{duration:.4},className:"content-placeholder",children:Object(a.jsx)("p",{children:"mega ultra text"})})},u=(n(30),function(e){var t=e.i,n=e.expanded,c=e.setExpanded,i=e.headerContent,o=t===n;return Object(a.jsxs)("div",{children:[Object(a.jsx)(s.b.header,{initial:!1,animate:{backgroundColor:o?"#FF0088":"#40dbb4"},onClick:function(){return c(!o&&t)},children:Object(a.jsx)("div",{className:"nepoetTitle",children:i})}),Object(a.jsx)(s.a,{initial:!0,children:o&&Object(a.jsx)(s.b.section,{initial:"collapsed",animate:"open",exit:"collapsed",variants:{open:{opacity:1,height:"auto"},collapsed:{opacity:0,height:0}},transition:{duration:.4,ease:[.04,.62,.23,.98]},children:Object(a.jsx)(h,{})},"content")})]})}),x=function(e){var t=e.content,n=Object(c.useState)(0),i=Object(O.a)(n,2),o=i[0],r=i[1];return A.map((function(e){return Object(a.jsx)(u,{i:e,expanded:o,setExpanded:r,headerContent:t})}))},A=[0];var f={duration:.5,ease:[.43,.13,.23,.96]},W={initial:{scale:.9,opacity:0},enter:{scale:1,opacity:1,transition:f},exit:{scale:.5,opacity:0,transition:Object(j.a)({duration:1.5},f)}},C=Object(a.jsx)("div",{children:Object(a.jsx)(s.b.img,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOkAAAChCAIAAACtXg+1AAAACXBIWXMAAAsSAAALEgHS3X78AAAgAElEQVR42u1dXWzbWHamfvwn/0g766CzcGp5MUAXTBcrZZ1WwXZjKUUyY+xmYMHevgQZmG6LeNCHSH5IHsYJwkWSLZBZwPS8dJyHikaCoCjWioKdts54gDA2UMRFDDNtYWEXKIYaOFhg7d1Qsi1Ztn76cOPrG5KiKFkiKYkHQUDZSiTyfjz8zrnnfMeUz+cxwypkHMdxHCfzhr6+vr6+PuNCVcSsxiXgeZ5lWfiSZVme5wv9Fr4nHo8f/aNdLpfD4cAwzO12OxyOPsSMdSlqpnr1uxCC8ABFIcdxsVhMz9/f5XL19fW53W6fzweQbYC1TrALn84Mw6AvK+UR9WZOp9N3YIZXriXssizLsizHcQzD8Dz/8uVLdT7X3N1jPnb88KWt0+I8gfz2OPpbYE24R+Y/zG2sZzdfwZfZ2Fo+mcAwbD+6fPBySwmO/X6/z+fz+/0GdvVozIE9e/bsiP+VpRc3tXe9IfjIMYZhVvy0cuSpY9nYWnbzVTa2lo2tZTdeZb+JFnqn3W73+/0EQfh8PgO72jOBSCTCMMzjx4+VBpu4B8Mwy4GDhL7Q8rbLrF3LJxOZWDQTfb4fXc5Elwt5YoIgCIJoKDqhC+zyPE/TNE3T8mTAinuA17TipwWP78axvZWFzNrzvZWFHMI9oI2OjgaDQbfbbWBXDWJA0/Ts7GwhutmEe6z4aasTb0ykylOL9OKcJIi9Xi9JknVPJDTDLk3TJElKJqqa+8819b/fhHvq46GvgifeW/zV3spXYgTTNF3HLEID7BZCLYBs86nzJluXgchSLbexngpPp5fCgp8HAgGSJOsyPawqdiORSDAYFKDW3N3TMjDScmbE8LJVQrDdbqdpuv4Saiphl+M4giAE2S5LL946ONYyMGJgTgUEDw0N0TRdTw5YDeySJPnzn/9c4Gvbxz/VQzK1jm0/upy8fwtNDzudzkgkUjdZiOpil+M4v9+PZr7M3T1twwHD16pmqfB0KvwZ+pNQKEQQhIHdIjFZMBhEqwtaPyDaRgJGKKayZWNr2zPXUAc8OjpK07SBXWkLBoPT09Mote0Yv2vkaDW05P1bu09oFL4URdU0/a08dnmeJwgC3dQ13K1OLL04l3xwC5b7uFwuhmFqF74Vxi7P8z6fDxJck63TdumGwW51xR8Sdy7WB3wriV0xcLsmHxo8QW+W21jfmvoY0t/aha+5SsC19OIOatEArh6X/NjxrusPLb04ePny5ctgMNjQftftdqPA7br+0CC4erZ8MpG4fRF631rMPFTG7xIEYQC3xpyWrQv1vrOzszWH3Qr4XYqiJiYmDODWKPeNT16Aodvq6moN7bodFbsMw5w9exYGZ/Y7XxglNbWbeXA6nSzL1krcdiTOwPP8hx9+CF92TMwYwK05szhP2C7dAMexWKyGtouPhN0f/ehH29vb4Lht+IpRW1Oj1jIw0vrBG8g+fvw4EonUOWcYHBx88uQJOLbinq7JhwYIatrin1wAaQe73c5xnP6ZQ5l+lyAICFwMw9ovXTfWvtatY/yuydaJYVg8Hq8J5mAuD7hod2Tb8BVjD6I+iG/r4BhkDkBwqK6wS1EUClyTrROesGG1bm3DAZjx1b/rLQ27NE3DVC6w1sExI5tbT2b76DDnoPPdihJiNZZlT548+dY/tnU6qEUDu3VmOzNXQa+bzoM2pX4XlNoIftjcb/Sj16frhUEbRVE1zxn8fr9YG9RgunVpJlsXXFmKolAl7drDLkmSsD3d/O3vvAlLew2dpbq11sEx/bve4thlGAZ2qFuO/1nuD797QxhOnTfWuBFcr24jNnNRmgtzJSZbZ4v3b1Cya6xxI7he3SYczEXZApRgahsOQMlBU6NKiDaU6205MwJZb41hl2VZ2KduxT2tg2OZgzJ7o+ymQVwvOHj58qUOt9nksIuyhY7LdzEMg7rbajrdfDKRCk+/vux+fdm9PTWeXpwDMxoMqzo4jh1vOTOsW9ZbELuoCnnbcMB87Hg2tgZ/KxjTUFVL3L6YCn+WT27lk1t7K1/t3LvGBwdS4WkDwSpY88DPwMHs7KzekmXmQiEa7B01d/eAZ0cOGUFj6e5R5/ulwtPiYSH55FYq/BkfHNhbWTDgVVVrwj3mg7XWW12vNHYpioI7Ee3jn8JnN/o0UeHLZWNrUAfO5XJNTU25XC4UwdtTHyfv3zIQVlWD0jB6ow1mSacL40or7oFhGcoZ1LGdB7fBAVA/DgaDLMt+/fXXo6Oj8D27T+hUeNpAWBWxe5BtePbsmfy0ZO2xizrdtuHA4Vu7Ve1Fy8bWYGiIzq7p6+ujafrRo0d2u/2AV3y2X2B4k2EVidhgYaSuaINZodMV8AQVsLI7H4JOVyzc4vf7GYaB8N2ZuWqArNFogxC7kUhE0ukK4rP9F19W+5vB24MgCMkyPLfbTZIkOM5tvlKf0jRQtuFgD/Xly5f6yTYIsQvRIHC6wO/CkDO9VN0ka25jHe7hwTQzz/MMw6CUKxgMQtdr5BwajTa8hV2GYeAOMGTokvdfPrmVmqtihIQOjIZMlyCIs2fPut1uFL6wqlh9ypvbWN+dD21PjfPBgT9eeg/8Sdy5mF6cq0PXe1B6pVPsQjYD5kaJ340W7O4+oVWGC9iWjMfjKHa10iDajy7zE97kg9t7K1+hkyUz0eWde9fin1yoV9qgn81hMxqlwVuqUI2Y+djxtuEr8OXOzFU1N7dAxOb1etEODq2yNvL0OvtNtM4ydxbnCVjRqxP4miWjNJmGCLSVNLf5SoUAHwYHJEnm83nBhYMvVS4PgvTa5XKFQqGnT58+ffo0FAod8u8X9ca/4RXWI3bf3GG9uPy2Wdf1h6a2joMl/KoazAHNacjkZWiahgRdzRKLVHga5p79fj9BED6fz+fzEQQBM4zirexaN3iFdYdd+IWKjocw2brM734XZQ5VDWxJkpS8WAzDoEUXqvnd/egyulMtyD2js6frLG0Hr7BgPqnG2EUJQ1EQJO/fyn79P4fh9uarakTWkLfE4/GzZ88SBBGJRBiGYRgmEomAnAP8zlBVQB2nCw7ATrVMCzhavVRPlFcnrtcq+Crm7h752ty9lQU4pstsNudyOQzD9le+rPgwn5aBkfTSHHw0z87Oono8b6H8A0K1BqT96DL8SiRJgoQdx3Fut7suZ6WLXe/eylcAMGLNA238rsKIJ7exDhmC3W7/6U9/CllvNb5c58Tnzf3nZNlLp+3SdTWdLtxQdDqdwWAQoBY8FrAGMOjX9OB332AXlpnLRzzb965BfXeKon74wx+iDqniX85k6+qYmOmcfNhyZhg+rQ6+p8d26br9zhcqa0TAricAVo7jAG+RXEvz29+5nsI1lmV1wRnQ6y7jd3fnQ/BxOTo6ShCEOs6mCfc04Z52Xa6lz+fzer3Pnj2DERuab66/dlQID7BDhAam2mAX3kMmW2eh7FhuYz15UE3rdDqBXAq6PWh14lgjGcSowOOiqcb6pA29OEj/sSyrLXbNKHZl/MT2vWvwGATXJEnCMN+KexpEmMwqO9SJZVk4SLleW6ktx3p0QhvMqAuxFnAV6cXDeD8QCPh8vkgkgo5pbxzdc5Rej42N+Xw+iqIYhqFpGuxQSL7TCNeqYaZ8Pu9wOIAHtV26Lr7i+WSCDw6gM4x4nne73YcNbZfvNtS06+T9WzBLWBDiHxBqZj/UtP3o8tadixiG2e12bWt5zYB3y3CG3fkQzC2I2ULLmeFGG9Nu++hG2/AVU+EcghX3tI0E6vX04XZ9PB7XFrtWlLWIczq5jXW4/wkKuDiOg3sE5u6eevUu8tY2HGgdHEsvzu2tLGRja+DeNnf3WJ14U//79X0zo9E8y7Ia7lBY0VtH7HfRQj4QmqC5hfbxTxtWOxooJTamArEV94D4R1vsymk65TbWgXY7hmGjo6MgIQIZurgpyLAGMUgbtG15l8Mu6nRhH9thudmZEWMVG9MgbdA2TWYulOmQdLo8z8MoTZ/a0bvzoVR4OrexbiCsmpxBFzvDVpTEoL9IL82JnS78rrrajMhtrKfC03srCzAfkl6cc1CLBshUSDXokTNAaQ/odN8iu7rZ8MzG1uKTF9JL4TxSLIs2PxpW1VSDhjsUh9jNIIVg6cU5CAW0LwAmJUztunC6+WQicediXqrEu76lRvajy+CPVuzIqoMw3erz+eAoFDFh8Hq9aBM5whlO62EJ914c8gSX8/u+Pz8z/e//9Mb1JrcsdQrcxJ2LGVHFqaUXN7V3NeEei/OEtVjHYUVoQ+bA72qVJrNK0scMoqek51XMbR56HXffD/qO9TbCIzsjVSoNarvgr8zdPc39560nTlepowTeGxpurUlgF3Zv2+12v99fKDzCdPDUQDdTZp89nEVaAJXXfWdja+CUTbauloER/e+2NPefK9qoktt8tfuExp7QJltnc//51sGxyhYTW/HTGPaZtqkGK9pllY2tWZwnYOOk3+8v1IOFOjxNV/E83ON5yysU67qDtH53PoQ2o6fC0/Y7X6ijjF22dUzMvEV8X3y5t7JQKDzNJ7fSS+H0UtjSi7cOjlVqvxqmGjT0u2aUzuaSW7mNdbiWYqcLEw760bvtnPgclerBMMxk6+yc+LwoavngwM69awIVhXxyC61U1r814R7bRzcc1GLrB4fsbmhoKBAIOJ1OAakAozoq0tQNb2/YLaa+mfL5vMlkAi9sl65jGAb6IyQr3EiShIHdt+6t6ufxmk8m9l4s5DbX5Z/7QP0uvTSXl+0+d0w907nrFdMeNN/y9OlTED+BwmJUwAA+l9rHPz3iln78kwvgzs/n89r4XZBMgAjIRJ+DY8ngEf2hrjSLAGRBeZckcNOLc4k7F/kJ7+4TGgWu3W4fHR1dXV1dXV0VM/5aBO7U1BRcJp/PR9M0x3E3b96EYlOADW/dubg9NX6UFBvMk2qV4jULmMA+IlUkiV1EKb8GtOJyG+vJ+7deX3bv3LsmoMVAR4zjOJqm3W632+2Gg1hqKDe8H11GgTs6OirWiAcl12IE7618FZ+8ADehSg6VDvantKK8b2EXlqIW8rsopnObr8o+bRWsqKNlWVagqH54HWpkWy4Vnt56G7gy2m0QwYFAAOX3yQe3E3culqHnCf2uVqkGMwpTeBWcTmehFlBY2wCund5clHJHK/63Wkn5lscT4p9cgG0BGIYFAgElwyAcDgdFUaurq+i0r0x0mQ8OlBp/Q26mVSWkWXLNZFaxr68P3rj55Nb2zDX9zJcEes7KHa3MDaBnFrQzczU++SHMkNjt9lAoVNK4arfbzbLszZs3UQe8VaJiO8xCaoldh8OB3oVFPRBJkjD/kv0mmrh9UQ/wzW2sb0+Nl+Roi3oUHaKWn/DC2lRwjgzDlLf9SZLk06dPUQa8c+9aGaqeWmJXzG7ld6gdDkckEoHnnP0mWsYTpxpOF3W3jx49Uu5oBfGyTiqNxNwdRa3dbr958ybLskehOqABEfVc6aVwqfCFEsi6wG7Ry+F2u9HxZuCJk7x/S0MH3HzqPCpFQ5JkSfEvx3E6kZVF8gALOzNXJbn76Ogox3Fo7FG2ORwOhmHQUaHppXD8kwv6HzVugolluEOBKc42cxzn9/vRnRWTrRN0IGry2M0nE4nbFyERHBoaUj6UxufzQexqqK6QTybgNq94AwVUmJAkWQ0xpWAwiOrFWHrxrusPZdYRCjVgGLa6uqp+pHtYvzs0NAQO4FZFUevr62NZVpBzARPWU+Fp9W9ck62r6/pD6H0fP36shAjyPI8CF8OwplPvq5832J0PJe5cfH355PbUx4JSepD5mZqaAty9SipgFEWFQodJz+w3UeVzxjVJ8R5iFy5zqeWYIOeCIh4ieGfmqspJNAF8Z2dnBfPYBM8N4MNQ4Db3n1On/zmfTOytLCTv3+KDA/HJD5MPbouLipxOZyAQWF1d5TguGAxWW56aIAgUvmVwX204A4ZhQK+p7FJimqZJkhQzd1DB1HzqfNlEIrexvn3vWia63HJmuH3801LJAyCIsCyOZVmO4xiGEdeRWHFP58TnVSU82djafnR5b2UhIxvdgh0yTVLONE2PjR3qTrQNXxFM5xVzBlhBoRl2K3XmNE1Lxj3N/eea+t8vCcT5ZCJ5/xYaXysslBHDt5jD7mwdHJNcpErhNRN9nolFFfbS2e32SCSiVUuCAL6SknN7KwvbUx+D49evX6s/ssBUpSIglmUpihJXMEEQW/HTzf3nZVCYTyZ250OoGhpA2LfusWXjXtIsvXjLwEjFq84hXgXJu5IsFApp1bqC1gyabJ1dkw8FJdGp8DTc2NOklMxU7U+NHJgkiMFsKSt+ugn3oDgGRFDgolo/INpGAqUibD+6nJ7/Z0GjgRX3WLp7xJ9bkcTW/osv96PL8v7V3N1jPna8CfeYu4/DL5CJPk8vzgn+oYbwJQgCas9ZcU/X5EP0tzszV4FfcLlcmpQ0mFS7YwCC0XHb4qe2xXnC6sT3//c/s+u/FUCt4/Ldo4Mst7FejcJcUD28v/KlfCsOaL+x4qflWRNI66KuWkP4+v1+qIYtIL58cADcZoFAoKQd6drDLkonAI6VlNwDqUnVRlCVQQxS4Wl5yAKCBDp4ld8MArKuFXxB7A5XChLf3fkQnOGgSXJXG+yi14U5MEkctw1f0WqbQ6FtT41LAtfSizfhnqZT75edbhPA1263MwyjCUTAHK5DkeZeHEMmznq9Xq1qz7XELjTBjg64QB3jd/U/JwdyPpS7HyUbKANfIDqvyQRCoFUqGbFokh3TBXYL7SpXKVdVDaa7Ox8y2bpKogQlcRK0LUIrZlkIvhoScY2xC8YCo5ejVtytmoamUbX1czzPB4NBkDICc8oKyXfUOXbR9KFkGFtPlk8mtqY+Vr4vKDB0OovT6dRWsVk/ZtbkUwmCQIFr7u6x3/l1UeCmF+f+eOm915fdNaeTl4lFwQ5weilcRlOG7aMbsEIjFosp6e0xsFst4KIT2VvODNt/8YUiGZulOQzD8smt2upBx94e+okKGyu3jvG76CPLAK4G2EWBa7J1tl++q3zgSu3KkppsXS1nhuHTo4z/weI8AeV/DNerAXYFwO2afKhcHiufTMBwWycKqiVZ88DPwEFu81V58G0dHIND3bTKNjQodmmaFgC3pHxCJhat6QvdhHsgZy2vMN9k64JX7OXLl0bEphJ2Qel02cDFMAyKTWGICGFtGewjym2+Ss2VoyqU+/038Fh5O5OB3SMZOsa1Y2KmjAwuKn9WW0J3qOuFUve7T+hSmcPufCj3h98Z2FUVu+gY15Yzw2Vs8aPKqjVtHZfvQs66c++acviCoh/0J3rraq5P7KKBRXm7DzWXFCt4uY8dt1067EDeuXdNCfcFbZjiAnYNZ+zowawqfAYsTLaUO8MDFe2z1vggWJBa2TlQqE6FP9udD7WcGWk69b6luwden3wykYlFxZrmLWeGi3aCGNitmMGnG5qiV27iVoJaNwF888mt3Sc03PWVMSAcAbGr7SjqhsAutPIUG2pC6LcM+Fqd+I5UX7v0OuGetuGAIFTQcNZDo2DX6XSCPp/sxqsygFuvQyotzhNdkw/3o8t7i7/KxKLiYBQ0QTXhnub+8zAzg5ZDNLLTVQm7Pp8P5Bmy30RL6hjbW1lAJWbFi1cH1oR7Skq8ZOoi31IzeQa0ylM5AcjG1qAoC9A8fIPdxp4VnFl7bvhdVbELVTLTS2ElSc3d+VB88kOYFaIoqsHXCX0WgQPlsnEGdo9kNE1DwdOde9dkBlWA4R+wBxWTaiyp7znXMoamXHQ+LlcFU69vQiATZO7uaRkYgRVh+WQis/ZcPJ8RBS5UWe2Y+Fy3Xe/Vs3wyEf/kArg+drud4zhN+i6LGsdxheqE+vr6KihiqV6ODEAwGAyCwobc5qtU+DMwk1bS7HY7TdMoV4b5isza80bD7n50OfUvd+GNrYImZFFjGIbneSBMyHEcz/PKZ1y6XC6Hw+Hz+cB0sPIArXa/GsuywWCw6F58IBAgSVKwPFCjxdKL23/xRYOgNrexnnxwC1WB0ERDCcCUYRgA1sqOYnU6nT6fz+/3l9S8qU2vZaFZoV6v1+/3FxoSQVHUxMQEONbVRNjqkYTU3LRgv62jo2NpaUkFkREUrCzLqjNUAgi7EwShJDTXWJ8BXCAZJgTeAISB5+fnl5ff7EJJqmrWk+3Oh1LhaXH9zaNHj6rXWQ6RyrKsQs9qxT1mW6fFeQKWxqNVGeK7ERRp7EeX5QsDvV4vSZLyCNaFLo6AVKAmqcVS37RhP7q8M3NVMo1dcS0PyAFYllVSVGnu7rE6cYvzhBU/LYNRgQE512xsTbB9aLJ1OqhFmfkaXq+XoqhCDxldYBeqksmAVWydkw+barymTExtt0UjfcTL6XA4QIjj8/mUR2wcYso5KwpWqxMvSfR778VCJvpcEpTQ3nnwf/B4b2Vhb/FXYn23QmpAmmEX4lXh7W4+dtzai2PNLekv7+fTSUxKEbbOqK0Se++99wYHB3/84x+/++67gFmJc1UleQRYRAH+LiOoSC/OFZVzBWsKRkKJb+BUeFpQ5+lyucQDHlXFLs/zQIK3kJQ0yqKsvbjFeQIILKO/QuW264P1SlJbc3dPjt/AMnvV/nSoYm1xnrCWW2ANMLc7H0ovzcmLvIO5DUUlu8XZFbESphrYBZCNRCJQhVjyCsJ7Xb6bLZ9M8MEBcIEAYardhIMkte3+/l90/v0/bm78Hk4iqZQBnwp4KoiuKkK6QCmcfEV8GaNGMJGMtgC+VcRuUchCHfBShfNRebkaDdokqS3+l3+V/7u7v29/F7yMf3Kh1C49Sy9uau8Cgf/BE+y0fOx/xLMQeEdJYiA/WKToR2xNfSypQ1wV7EYiEZqmC0HWinsENallGCraXJ5Ana6oreM7f/rtf/jl6++ekgzSMWRoem5jfW9lIb04Jwlr1fQIixJ0K+4BqK3IZ6E6xHBrppLY5XmeoiiapsV5bEAJgA54NXSVawW+qfC0YHJRa0eXbfgK9v6Ycj+U3XzVhHsk+Ya5u8dBLVb7LNKLc8kHtwrxWskWj8ouN8gVVga7PM+TJCnQLgeXsrn/fMvAiAq6yjqHr+TkIvtPxsz+K8pvZgFZah0cy8bWBM4PzTpVw90CMVbVUIvetPHJC2C5geutAHYpikKlQyCRbR0cq7YKtAC+Rcc3a2LZ2Jq4L625/5zt0o1SWSCaY4HeoX3809zGOuzcrF7aWzyACP0aKoy0QU//66+/PhJ2eZ73+/1oglb9Oe4C+Jpsne3jn+qkykxyOKGlF7d9dKM8eAlOFlrn5EPIH2yXrouTpkc3VL9aTLLVWfHcxjo/4YW0oXzssixLEAS6N1PeOWRja7nk1lFiYUEoCryacmlU1aitydZpu3TjiAlpSfiabJ1tF8aT//rLalBeGZ6g/owFONTt5s2bZWKX5/m+vj50bpHCc8gnE2BrG/xd9rzVoh5O/ScANMkoqoLOSRK+zW7f/m9XwA8rSP3FfkH9nAZqiTsXwV1UPnbdbjf0uEpmn2dja3srC3svFuQTlkeMM8SETGUES+Y7y6O2JcXdwJp+MLD/3288bkWYQyGKYu7u6Zz4XJORNq8vu8H3KZMzoGNO5MMjUJCxOx9SkmOvyH0sSTFViB3BsCpBIHUUaqvkE+H+4iGq7N25+GZFEi+FgKshH9uPLsO9xtXV1ZKxK2AL9ju/lgSE5BR2wb0Ltn/BPnDFTzIVnhZTtCrl7NKLcwINlIpQWyWfC9MLyJ1qwg7WtGyc7UeXt6fGxWun7SwmuCEFhh2VjF20ZVLyTORRCzYJqzRJTyGCscLz48v4iOT9W4KaVNVYSj6ZeH35pPx7QBKtJO8gfUtoXfmE5rZv3rxJkmTJ2IUzIyTrYCQz8PARpkLGV5KDytc3lfcESC/OpZfmBDdGy5nhtuGAatLW2dhafPJDJe9UuGtQqD6hPKn6yp4pJDCwR7pk7Pp8PpDQBZqEqA/YmbkqWZah8orK3Lh7z/9t77/+A8tmZN5m6cWtTtx87DioYoHrDfpVchvrkvXU5j9xtl+63nTyrzV5hmJIEzW0733ve7/5zW8Ep9YyMCJZGZONrYG7UXyH6wq4GNL1VD520f0bdL9Oh6iFnlJmF74iptr5CkJS4IpIkqRpOh6Pu1wukiT9fr94yxPCEcWiIFmpK+AKiptHR0fhfK7ysYtGaYX2KnXSkyMmvna7PRKJuN1u2L5RRtP2O++8k0qlUqmUOBJvGfzb6p27mJgB/lcotqYoiqIo5a0TOgGueNVQ4B4Ju1bc03H5rvnY8d35ECrBhOljW0uGlQ4NDdE0Le70gl2yHMfJdCK5XC6fz0cQBKgijUQiFEWJ31+NwhRxQkO8ooUQXLT8H4huQYhrBdxCedWpqSk4KqpM7KIiCTL3a9twoBq76soZUnpxTqwQVer0cfFAh0Jd1+CRjc6ahc+ftuFAqf0Ckqkbsf673W4nSVKwokpOStDZBs7L4XCcPHmYtSiU/ayel81En0vuXkk2q5WDXUF+Vz470zo41jIwoo4DBrvNkqJmZS9zqQYQLO7GM9k6W86MlJpXBh6oUN/i6OgoSZKVkvcSLGu102GgCjkTfZ6NrWU3XhXaunI6nSRJFmrrL2dfTaCKBykXQRDBYFD8VGruPwcyqZW9j0ERDzj/TCxaSJdX/vyrYTIUE2yOWE+cLtTVCLIZmejz/ehyoTLZyqJWQAWx6mxAoOclExpCR6NEHafMegYgygRaqIGMFLyUDMOQJFmIL0IZFQzDQLufzK2Z21wXPFbAgZIZDeD8g8GgCvJHMgiW7CJBr8bh6u4k5HfOXS4XQRCFBK+OYugmf3P/uY6JmUo5F4BXyYkEhQIJv9+vUGu5Wr2WDMNQFCUTGVTJSj1/FYymaZqmyx7lByCLeoeKr9TZs2fhY8H+iy+OwvEAbQV1gkrSkWC9gJV6T6aP0lsAAAEaSURBVFa3xx2GtwzDlJGjUbi0fX19QCTG7XbrU5IWUGFwHZRcCqCLCKxKkIUL5Ha74ZOhjPgMLWpVOLPoKHhVD7uCxYOqeKDPU16x1el0CpYNQhMcVFaIWGUcQxMnMdR8YgSDQdhlqJzmwrC4qCQeNK/XC8BaQf+iOy09w1QzlC0UFcgqFa92ux2CtUp3o4HdxjW0gcAx9Uyc9ygVry6XCyC12lTnzf1mLGFjGk3TELhtw1fQOcYl4bUaZMDwu4bJhWhwJwL0ZgIRXCV4BXEkDI41PAvD7zaiCfZN/njpPYWZgbLnmhh+17AKO12ZSAsyV91OZTT8biMyXUngwsyA5mTAwK5hBdMLtYtXgzM0ukUiEY7jahGvqP0/yi8tj4yByDMAAAAASUVORK5CYII=",alt:"kajeek",variants:{hover:{scale:1.1}},transition:f,whileHover:{scale:1.1}})}),V=Object(a.jsxs)(s.b.div,{className:"thumbnail",variants:W,children:[Object(a.jsx)(x,{content:C}),Object(a.jsx)(s.b.div,{className:"frame",whileHover:"hover",variants:{hover:{scale:.95}},transition:f})]}),g=function(){return Object(a.jsxs)("div",{className:"home",children:[Object(a.jsx)("h1",{children:"nepoet"}),Object(a.jsx)("div",{className:"gallery",children:Object(a.jsx)(s.b.div,{className:"thumbnails",initial:"initial",animate:"enter",exit:"exit",variants:{exit:{transition:{staggerChildren:.1}}},children:V})})]})};var z=Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{children:"Home page"}),Object(a.jsx)(g,{})]}),m=function(){return Object(a.jsx)(l,{content:z})},v=(n(31),n.p+"static/media/logop.507ac2dc.png"),F=n(9);var X=function(){return Object(a.jsxs)("div",{className:"navbar",children:[Object(a.jsx)(F.b,{to:"/home",children:Object(a.jsx)("img",{src:v,alt:"nepoets",className:"logo"})}),Object(a.jsxs)("ul",{className:"nav-links",children:[Object(a.jsx)(F.b,{to:"/home",children:Object(a.jsx)("li",{children:"Home"})}),Object(a.jsx)(F.b,{to:"/about",children:Object(a.jsx)("li",{children:"About"})})]})]})},p=n(2);var y=function(){return Object(a.jsxs)(F.a,{children:[Object(a.jsx)(X,{}),Object(a.jsxs)(p.c,{children:[Object(a.jsx)(p.a,{path:"/about",component:b}),Object(a.jsx)(p.a,{path:"/home",component:m})]})]})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),i(e),o(e)}))};r.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root")),L()}},[[37,1,2]]]);
//# sourceMappingURL=main.ed618bcc.chunk.js.map