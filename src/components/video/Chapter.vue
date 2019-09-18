<template>
  <div>
    <Section
      v-for="item in chapter"
      :key="item.key"
      :title="item.title"
      :introduce="item.introduce"
      :content="item.content"
    />
  </div>
</template>

<script>
import Section from './Section'
export default {
  data() {
    return {
      chapter: [
        {
          key:1, 
          title:"第一章: 为什么要做动效设计", 
          introduce: "从互联网产品的底层逻辑逻辑及交互中去了解动效设计的实际价值及参考意义", 
          content:[
            { key:1, text:"1-1 动效设计(12:15)" }
          ]
        },
        {
          key:2, 
          title:"第二章: 动效需求的分析与交付", 
          introduce: "UI工作中动效需求下达及交付形式和产出的主要流程", 
          content:[
            { key:1, text:"2-1 动效设计(12:15)" }
          ]
        },
        {
          key:3, 
          title:"第三章: 交互动效设计", 
          introduce: "对AE自带主流插件及第三方插件进行详细拆分及套用案例分析。从而利用这些原理与技巧去设计大部分我们遇到的交互动效", 
          content:[
            { key:1, text:"3-1 表达式、运动模型、速度曲线(17:01)" },
            { key:2, text:"3-2 形状工具(1) (17:01)" },
            { key:3, text:"3-3 形状工具(2) (17:01)" },
            { key:4, text:"3-4 父子集关系(17:01)" },
            { key:5, text:"3-5 particular(17:01)" }
          ]
        },
        {
          key:4, 
          title:"第四章: 综合案例", 
          introduce: "综合上述所有插件及技巧, 制作一个完整的交互动效demo", 
          content:[
            { key:1, text:"4-1 综合案例(1) (13:00)" },
            { key:2, text:"4-2 综合案例(2) (6:30)" }
          ]
        }
      ]
    }
  },
  components: {
    Section
  }
}
</script>

<style scoped>
  
</style>