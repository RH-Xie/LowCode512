<template>
<div class="editor-left">
    <div class="editor-left-materials">
        <div v-for="item in materialList" key="item.id" class="material" @click="onClick($event, item)">
            <MaterialBlock :title="item.title"> </MaterialBlock>
        </div>
    </div>
   <!-- <a-card title="项目名称">
     <a-input @change="projectStore.changeProjectName" :default-value="projectStore.project.name"></a-input>
   </a-card> -->
    <div class="editor-left-pages">
        <EditorPages/>
    </div>
    <div class="editor-left-elements">
        <EditorElements/>
    </div>
</div>

</template>

<script setup lang="ts">
import "./EditorLeft.less";
import MaterialBlock from "../MaterialBlock/MaterialBlock.vue";
import EditorPages from '../EditorPages/EditorPages.vue'
import EditorElements from '../EditorElements/EditorElements.vue'
import { getMaterialDefaultProps, materialList, materialMap } from "@/data"; // @路径导入ts文件报错
import { IMaterial } from "@lowcode512/shared";
import { useProjectStore } from '@/store'
import { PageElement } from "@lowcode512/shared";

const projectStore = useProjectStore();

const onClick = (e: Event, m: IMaterial) => {
    const ele = PageElement.create();
    ele.mId = m.id;
    ele.name = materialMap[m.id].name.split('Lc')[1];
    ele.mVersion = m.version;
    ele.props = getMaterialDefaultProps(m)
    projectStore.addElement(ele);
    projectStore.saveSnapshot();
    projectStore.load(m)
}

</script>

<style scoped></style>
