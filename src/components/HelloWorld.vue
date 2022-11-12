<template>
  <div>
    <el-container>
      <el-header>
        <div class="header" id="top">
          <div class="header-logo">
            <img src="../assets/2611814e22a171d522f9.png" alt />
            <span></span>
            <img src="../assets/下载.png" />
          </div>
          <div class="header-link">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
              <compoment
                class="menu-item"
                v-for="(item) in headerData"
                :key="item.name"
                :is="(item.children&&item.children.length>=0 ? 'el-submenu': 'el-menu-item')"
                :index="item.name"
              >
                <div v-if="!item.children">{{item.name}}</div>
                <!-- 此处如果有div标签包裹的话 外层name不显示 -->
                <template v-if="item.children&&item.children.length>0" slot="title">{{item.name}}</template>
                <div v-if="item.children&&item.children.length>0">
                  <el-menu-item
                    v-for="(v,idx) in item.children"
                    :key="idx"
                    :index="v.name"
                  >{{v.name}}</el-menu-item>
                </div>
              </compoment>
            </el-menu>
          </div>
        </div>
      </el-header>
      <el-main>
        <div class="swiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="item of imageData" :key="item">
                <img :src="item" alt />
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
          </div>
        </div>
        <div class="horn">
          <i class="el-icon-bell">扣顶头条</i>
          <p>{{hornP}}</p>
          <i class="hot">hot</i>
        </div>

        <div class="learn-more" id="shiyanshi">
          <div class="learn-title">
            <div>编程好工具，学习更轻松</div>
            <div>选择适合你的编程神器</div>
          </div>
          <div class="learn-content">
            <div class="left-content">
              <div>
                <div class="left-item" v-for="(item,idx) in learnData" :key="idx">
                  <div>
                    <img :src="item.img" alt />
                  </div>
                  <div>
                    <p>{{item.title}}</p>
                    <p>
                      <span>{{item.age}}</span>
                      <span>{{item.type}}</span>
                      <span>{{item.subject}}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="right-content">
              <div>
                <div class="right-top">
                  <div class="right-top-left">
                    <p>
                      <i class="el-icon-s-promotion"></i>
                      专为6-9岁孩子定制的编程启蒙App
                    </p>
                    <p>腾讯扣叮-编程第一课</p>
                    <p>
                      腾讯自研的游戏化编程启蒙APP，作为孩子的“编程第一
                      课”, 通过趣味的积木编程闯关，让孩子学习编程更简单、
                      更有趣、更高效。
                    </p>
                    <div>
                      <div>立即体验</div>
                      <a href="/">
                        了解更多
                        <i class="el-icon-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <div class="right-top-right">
                    <div>
                      <video
                        src="https://wuji-30130.sz.gfp.tencent-cloud.com/20210516_rfqbytd62t.MP4"
                        muted
                        autoplay
                        controls
                      ></video>
                    </div>
                  </div>
                </div>
                <div class="right-bottom">
                  <div>
                    <h3>应用截图</h3>
                  </div>
                  <div>
                    <ul>
                      <li v-for="(item,idx) in applyData" :key="idx">
                        <div>
                          <img :src="item.url" alt />
                          <p>{{item.content}}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 锚点 -->
        <div class="maodian" :class="{moveTO: isExpend}">
          <div>
            <img src="../assets/QQ截图20221112235440.png" alt />
          </div>
          <div v-show="isExpend">
            <ul>
              <li>
                <a href="#shiyanshi">
                  <img src="../assets/实验室.png" alt />
                  <span>实验室</span>
                </a>
              </li>
              <li>
                <a href="#top">
                  <img src="../assets/回到顶部.png" alt />
                  <span>回到顶部</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </el-main>
      <el-footer>
        <div>
          <div class="footer-top">
            <div>
              <img src="../assets/下载 (1).png" alt />
            </div>
            <div>
              <p>青少年编程</p>
              <ul>
                <li>首页</li>
                <li>实验室</li>
                <li>课程</li>
                <li>名师团</li>
                <li>校园</li>
                <li>社区</li>
                <li>追梦营</li>
                <li>CodingDay</li>
              </ul>
            </div>
            <div>
              <p>友情链接</p>
              <ul>
                <li>腾讯游戏追梦计划</li>
                <li>小鹅营地</li>
                <li>智启学堂</li>
                <li>腾讯工蜂</li>
              </ul>
            </div>
            <div>
              <img src="../assets/下载 (2).png" alt />
              <p>
                关注扣叮公众号
                <br />携手创造孩子未来
              </p>
            </div>
          </div>
          <div class="footer-bottom">
            <p>Copyright © 1998 - 2022 Tencent. All Rights Reserved. 腾讯公司 版权所有</p>
            <p>
              <a href="/">服务协议</a>
              <span>|</span>
              <a href="/">隐私政策</a>
              <span>|</span>
              <a href="/">版权保护投诉指引</a>
            </p>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Swiper from 'swiper'
import $ from 'jquery'
export default {
  data() {
    return {
      headerData: [
        { name: '首页', link: '/' },
        { name: '实验室', link: '/' },
        { name: '课程', link: '/' },
        { name: '名师团', link: '/' },
        { name: '校园', link: '/' },
        { name: '社区', link: '/' },
        { name: '追梦营', link: '/' },
        { name: 'CodingDay', link: '/' },
        {
          name: '赛事活动',
          link: '/',
          children: [
            { name: '2022Noc扣丁创意编程', link: '' },
            { name: '深圳创客节创意编程赛', link: '' },
            { name: '龙岗区第十四届中小学生科技奥林匹克竞赛活动', link: '' }
          ]
        },
        {
          name: '立即创作',
          link: '/',
          children: [
            { name: '创意实验室', link: '' },
            { name: 'Puthon实验室', link: '' },
            { name: '3D实验室', link: '' }
          ]
        },
        { name: '登录', link: '/' }
      ],
      imageData: [
        'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220909_2huzgbj4onv.png',
        'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20221017_i1n62bthmuobanner.png',
        'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220901_rz0z7qqh2gtgebanner.jpg',
        'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20220909_9e0choci7rg_20220909101245.jpg',
        'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20211230_u9kh06gxj4a79e15a997c42203c515773168a900f9.jpg'
      ],
      hornData: [
        '腾讯编程课进村，这是孩子们创作的“APP”',
        '立项四年，腾讯互娱如何做编程教育',
        '2021腾讯追梦营嘉年华圆满落幕'
      ],
      hornP: '',
      learnData: [
        {
          img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAiCAYAAABBY8kOAAAEFElEQVRIia2XX0wcVRTGf3NnlyW0S11boLS1FhpLADXWKqCl0QbTmFRTNT5oYoyvuIkaEx/wyRfdN01MiL41vhijSY1SH7Q2TYWaUPoHWwoNVFppkQCtlUJhd2dmx9zZuduZ2eXf4vcyOefc+31z7px77h1tsu09lkEV8DLQCuwFtgApYBw4C/QA3wOTS9E4QtFEPC8w29HZBHwONC/3Ji56gXeiifjpAI/zFIVmzHZ0drgTVyqCO7bXnZuHUEDgEeALd4my0AWh+hpCjbXoD1YjysuwzQz2nTms8WnMS6OYQ1fByqgZn8x2dB4E2qOJ+EXlDAWUfSKh+h1EDrYiNm7wDdJ0Ha0ihqiIEX5sF5lbM6R+6sEcuqaG7HW5WnPv+0FtC5HnmmQ2HwJvZZkgcqCF0kPPoJWVLrtmckz40V1oIR1r9IZyb08f7zOBblQxAE8Dp9SIyIFmSvY/saxAIaRPnCH1S683IrP7XRXDp/eWq4aSZ4sTkZBzQw01XpfDLdx9ka0uXRB5cZ+zdEVDLvsL+xwuF5J7a8jdjNlsGmsRsWhOIjNxk+SRE2SmbiMqY5S+sh9RvWnZuOQINe7EvDCihr4kvJURbqj15bHw7a9YN6aw04bzlPZK42H/8rVKoSZliQeqfESZqX+KtsV2H1ez+kbZYPk6H7HcJ8XaIurj2iKFclvatm0fcemrbYjNG0HXnbWX9orjmq+iRMjtwg85QjNzaJvuy0X1bZWse/c1FsNScXtu3mtOyowuKysz/e+ipKuF9fdN74zzwj1PHJiXr62VP4cAV48UOpoL9g9jzyfXLCI5JJcHR6XQINDvDEgbwT5VFFLHeh0uF5J7UPWJ3GFlnB5wzphiYY5cx+gd8M52uJXQTM6taQhP5a0WemUMhO6ddckrlOve4d11iKr7ixbSNqwn/LCvlb2hhCqAFsclBCVtTxYtohDaXec1DymhN3MD6ncgYuVrF9q5LXhMhP3d+/G6RSevTklHW1/m9WyWQnuUpW+t/H+ELAv77oLXM13wXrcWAQmjbwhMS3nPAEl/Cxoec5723STmwJ+r1jH6R5j7+DDJH0963Z/h3ut+Bl6XRqqr29lw1pXraKUR52gPtHuM/mGs0XEizz+VdxWzRsaCXVverL7GrbqvgHNOJoaJefEK9kKKzO07GH+M4GfKkPrhJEbfIOnu876QPGKMwatBkXZlqG/UrsS8cDIcHssK35oh2dWNnUxnMzt1AeuvCcjYThYL3xwDw1Szz0YT8da8K7H7B7BntqOz2i33j4AG2YUXDncV/B4y+/kvjxSMAe8HHb6qiybiE9FE/Ds3w9zdtgDu9cZ8vB1NxH8Lupf6EZMNTwrKDOXuvuVWqLy8y58uFZPtSx6nKnY8jwn4DzeQgHU7MSGyAAAAAElFTkSuQmCC',
          title: '腾讯扣叮-编程第一课',
          age: '6-9岁',
          type: '编程启蒙',
          subject: '计算思维'
        },
        {
          img: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200429_ir7137irhcn48X48.png',
          title: '3D实验室',
          age: '6岁+',
          type: '创造力',
          subject: '3D立体'
        },
        {
          img: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_whgr206kz0sai.png',
          title: '人工智能实验室',
          age: '10+岁',
          type: '前沿科技',
          subject: '走进AI'
        },
        {
          img: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_16yws3wyo7hgame.png',
          title: '游戏实验室',
          age: '6-8岁',
          type: '创意游戏',
          subject: '零基础'
        },
        {
          img: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200306_otye6yv5nvart.png',
          title: '艺术(p5)实验室',
          age: '7+岁',
          type: '艺术表达',
          subject: '数理知识'
        },
        {
          img: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200311_r7ymefinhg.png',
          title: '硬件实验室',
          age: '6+岁',
          type: '软硬结合',
          subject: '创客教育'
        },
        {
          img: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20200311_8036tcku7o20200306_igf96a5gbzjs.png',
          title: 'JS实验室',
          age: '7+岁',
          type: '前端开发',
          subject: 'JavaScript'
        }
      ],
      applyData: [
        {
          url: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20210514_667b2qum87qimg1.png',
          content: '妙趣剧情，学习不枯燥'
        },
        {
          url: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20210516_8hkhp06cbfq04.png',
          content: '编程闯关，探索编程奥秘'
        },
        {
          url: 'https://wuji-30130.sz.gfp.tencent-cloud.com/pics/20210514_7xvlv329fmpimg3.png',
          content: '知识解锁，收获丰富趣味知识'
        }
      ],
      activeIndex: '1',
      mySwiper: '',
      isExpend: false
    }
  },
  created() {},
  mounted() {
    let mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      slidesPerView: 'auto',
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true
      },

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'custom',
        bulletClass: 'my-bullet',
        bulletActiveClass: 'my-bullet-active',
        // renderBullet: (index, className) => {
        //   let text = ''
        //   switch (index) {
        //     case 0:
        //       text = '第四届追梦营'
        //       break
        //     case 1:
        //       text = '深圳创客节创意编程赛'
        //       break
        //     case 2:
        //       text = '深圳TGE虚拟机器人挑战赛'
        //       break
        //     case 3:
        //       text = '编程与人工智能活动'
        //       break
        //     case 4:
        //       text = '腾讯游戏年度故事片'
        //       break
        //   }
        //   return '<span class="' + className + '">' + text + '</span>'
        // }
        renderCustom: function (swiper, current, total) {
          var _html = ''
          let text = ''
          for (var i = 1; i <= total; i++) {
            switch (i + 1) {
              case 1:
                text = '第四届追梦营'
                break
              case 2:
                text = '深圳创客节创意编程赛'
                break
              case 3:
                text = '深圳TGE虚拟机器人挑战赛'
                break
              case 4:
                text = '编程与人工智能活动'
                break
              case 5:
                text = '腾讯游戏年度故事片'
                break
            }
            if (current == i) {
              _html += `<li class="swiper-pagination-custom active" value=${i}>${text}</li>`
            } else {
              _html += `<li class="swiper-pagination-custom" value=${i}>${text}</li>`
            }
          }
          return _html //返回所有的页码html
        }
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })

    this.changePage(mySwiper)

    this.hornTip()

    this.getScrolll()
  },
  methods: {
    changePage(mySwiper) {
      $('.swiper-pagination').on('click', 'li', function (e) {
        console.log(e)
        var index = e.target.value
        console.log(index)
        mySwiper.slideTo(index, 500, false) //切换到第一个slide，速度为1秒
      })
    },
    hornTip() {
      let i = 0
      setInterval(() => {
        if (i == 3) {
          i = 0
        }
        this.hornP = this.hornData[i]
        i++
      }, 2000)
    },
    getScrolll() {
      window.addEventListener('scroll', () => {
        let scrollTop =
          window.pageYOffset ||
          document.documentElement.scrollTop ||
          document.body.scrollTop
        scrollTop >= 300 ? (this.isExpend = true) : (this.isExpend = false)
        let maodian = document.querySelector('.maodian')
        if (scrollTop >= 300) {
          maodian.style.top = '100px'
        } else {
          maodian.style.top = '250px'
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
ul > li {
  list-style: none;
}
.el-header,
.swiper-container {
  cursor: pointer;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  // line-height: 60px;
}
.el-header {
  background: #fff;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 0 0 30px 0 !important;
}

body > .el-container {
  margin-bottom: 40px;
  background: #eff3f8;
}
.header,
.header-logo {
  display: flex;
  flex-direction: row;
}

/**导航栏 */
.header {
  .header-logo img:nth-child(1) {
    width: 180px;
    height: 52px;
    background-size: 180px 52px;
  }
  .header-logo span:nth-child(2) {
    width: 1px;
    height: 25px;
    background: #d4dce8;
    display: block;
    margin: 13px 10px;
  }
  .header-logo img:nth-child(3) {
    width: 133px;
    height: 57px;
    background-size: 133px 57px;
    margin: 0 10px 0 0;
  }
}
.header-link {
  flex: 1;
}
.el-menu {
  display: flex;
  justify-content: space-between;

  .el-menu-item:hover div,
  .el-submenu:hover div {
    color: #4a596f;
  }
}
/**轮播图 */
.el-main .swiper-container {
  width: 100%;
  height: 383px;
  /* border: 1px solid red; */
  .swiper-pagination {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    line-height: 50px;
    height: 50px;
    opacity: 0.5;
    background: #fff;
    width: 80%;
    margin-bottom: -10px;
    margin-left: 10%;
    .swiper-pagination-custom {
      width: 18%;
      text-align: center;
      // border: 1px solid red;
    }
  }
  // < 轮播图切换按钮
  .swiper-button-prev {
    position: absolute;
    bottom: 0;
    top: 93%;
    left: 10%;
  }
  .swiper-button-next {
    position: absolute;
    bottom: 0;
    top: 93%;
    right: 10%;
  }
  /* 设置图片样式 */
  .swiper-wrapper .swiper-sliide img {
    width: 100%;
    height: 100%;
    /* background-size: 1579px 383px; */
    margin: -50px;
  }
}

/* 小喇叭 */
.horn {
  height: 50px;
  width: 80%;
  background: #fff;
  opacity: 0.5;
  margin-left: 10%;
  display: flex;
  text-align: center;
  align-items: center;
  .el-icon-bell {
    display: inline-block;
    font-size: 26px;
  }
  .hot {
    display: inline-block;
    width: 36px;
    height: 16px;
    border-radius: 8px 8px 8px 0;
    text-align: center;
    font-size: 12px;
    line-height: 16px;
    color: #fff;
    background: red;
  }
  p {
    padding: 0 20px;
  }
}

/*编程好学习，学习更轻松 */
.learn-more {
  margin-top: 40px;
  .learn-title {
    display: flex;
    flex-direction: column;
    text-align: center;
    margin-bottom: 20px;
    div:nth-child(1) {
      font-size: 40px;
      font-weight: bold;
      margin: 10px 0;
    }
    div:nth-child(2) {
      font-size: 16px;
      color: rgba(74, 89, 111, 0.6);
    }
  }
}

.learn-content {
  display: flex;
  width: 80%;
  height: 600px;
  margin: 0 auto;
}
.left-content {
  width: 25%;
  height: 600px;
  /* align-content: center; */
  background: rgb(26, 166, 255);
  .left-item {
    /* border: 1px solid red; */
    display: flex;
    width: 94%;
    height: 84px;
    margin: auto;
    /* justify-content: center; */
    align-items: center;
    border-top: 1px solid #0090ff;
    border-bottom: 1px solid #0090ff;
    div:nth-child(1) {
      padding: 8px;
      background: #fff;
      margin: 4px;
      border-radius: 12px;
      width: 48px;
      height: 48px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    div:nth-child(2) p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #fff;
    }
  }
}

.left-item div:nth-child(2) {
  p:nth-child(1) {
    font-size: 18px;
  }
  p:nth-child(2) {
    font-size: 12px;
    span:nth-child(2) {
      padding: 0 5px;
    }
  }
}

.left-item:hover {
  // background: #fff;
  color: #498ff6;
  border-radius: 12px 0 0 12px;
  div:nth-child(1) {
    animation-name: toRedius;
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
  }
}
@keyframes toRedius {
  0% {
    border-radius: 12px;
  }
  50% {
    border-radius: 20px;
    width: 40px;
    height: 40px;
  }
  100% {
    border-radius: 24px;
    width: 42px;
    height: 42px;
  }
}
.right-content {
  flex: 1;
  height: 600px;
  // background: red;
  > div {
    height: 600px;
  }
}
.right-top {
  height: 60%;
  background: #fff;
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1px solid #4a596f;
  .right-top-left,
  .right-top-right {
    width: 50%;
    height: 100%;
  }
}
.right-top-left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #4a596f;
  padding: 20px;
  box-sizing: border-box;
  el-icon-s-promotion {
    display: inline-block;
    font-size: 24px;
  }
  p:nth-chilld(1) {
    i {
      padding: 10px;
    }
    font-size: 16px;
  }
  p:nth-child(2) {
    font-size: 24px;
    line-height: 1.5;
  }
  p:nth-chilld(3) {
    color: rgba(74, 89, 111, 0.6);
    font-size: 16px;
  }
  div:nth-child(4) {
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 40px;
    div:nth-child(1) {
      width: 150px;
      height: 40px;
      background: #0080ff;
      border-radius: 20px;
      color: #fff;
      margin-right: 28px;
    }
    a:nth-child(2) {
      height: 40px;
      text-decoration: none;
      color: #4a596f;
    }
  }
}
.right-top-right {
  div:nth-child(1) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    video:nth-child(1) {
      width: 80%;
      height: 80%;
    }
  }
}
.right-bottom {
  height: 40%;
  background: #fff;
  padding: 20px;
  box-sizing: border-box;
  div:nth-child(1) {
    padding: 0 0 10px 0;
  }
  div:nth-child(2) {
    height: 100%;
    ul {
      display: flex;
      height: 100%;
      flex-wrap: nowrap;
      justify-content: space-between;
      list-style: none;
      li {
        width: 30%;
        height: 58%;
        div {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          img {
            width: 100%;
            // height: 100%;
            background-size: auto;
            padding-bottom: 12px;
          }
          img:hover {
            // overflow: hidden;
            transition: all 0.5s;
            transform: scale(1.1);
          }
        }
      }
    }
  }
}

.el-footer {
  background: #fff;
  font-size: 14px;
  width: 100%;
  height: 364px !important;
  padding: 0;
  div:nth-child(1) {
    width: 80%;
    height: 100%;
    margin: auto;
    .footer-top {
      width: 100%;
      height: 204px;
      display: flex;
      // background: yellow;
      padding-bottom: 20px;
      margin: 20px 0;

      border-bottom: 1px solid #4a596f;
    }
    .footer-bottom {
      width: 100%;
      height: 160px;
      // background: blue;
      display: flex;
      justify-content: space-between;
    }
  }
}
.footer-top {
  text-align: left;
  div:nth-child(1) {
    width: 23%;
  }
  div:nth-child(3),
  div:nth-child(4) {
    width: 20%;
  }
  div:nth-child(2) {
    flex: 1;
  }
  div:nth-child(2),
  div:nth-child(3) {
    p {
      font-size: 16px;
      color: rgba(74, 89, 111, 0.6);
      margin-bottom: 12px;
    }
    ul {
      height: 168px;
      display: flex;
      flex-direction: column;
      font-size: 14px;
      line-height: 28px;
      flex-wrap: wrap;
    }
  }
  div:nth-child(4) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-end;
    img {
      width: 60%;
      height: 60%;
      padding-bottom: 10px;
    }
    p {
      text-align: center;
      margin-right: 10px;
    }
  }
}
.footer-bottom {
  p:nth-child(2) {
    a {
      text-decoration: none;
      margin: 0 12px;
    }
    a:nth-child(5) {
      margin: 0 0 0 12px;
    }
  }
}
.maodian {
  position: fixed;
  top: 350px;
  right: 20px;
  z-index: 999;
  div:nth-child(1) {
    width: 102px;
    height: 136px;
    margin: 50px 0;
  }
  div:nth-child(2) {
    width: 102px;
    ul {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      li {
        background: #fff;
        width: 80px;
        height: 102px;
        border: 1px solid blue;
        a {
          text-decoration: none;
          text-align: center;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
}
.moveTo {
  div:nth-child(2) {
    transition: all 1s;
  }
}
</style>