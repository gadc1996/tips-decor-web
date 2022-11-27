<script lang="ts" setup>
interface Note {
  id: number,
  title: string,
  content: string
}

const note = await useNote(1)
</script>
<template lang="pug">
.note(v-if="note")
  h1.note__title {{note.title}}
  img.note__img(:src="note.image.presigned_url")
  p.note__content(v-html="note.content")
  //-   |  Cras enim urna, rhoncus at euismod sit amet, dictum eget nisl. Nullam porttitor turpis in ante feugiat dapibus. In hac habitasse platea dictumst. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer elementum nulla nunc, ut varius erat convallis et. Aliquam commodo pulvinar elit, ac finibus nibh egestas id. Sed quis viverra tortor. Nunc nec nisi in purus aliquam ullamcorper vel ut tellus. Suspendisse porttitor mattis augue nec tempus. Sed sollicitudin et ex at consectetur. Etiam feugiat leo ac nunc placerat, quis tristique justo eleifend. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.
  //-   br
  //-   br
  //-   |  Sed efficitur sed est vitae laoreet. Suspendisse a vestibulum ligula. Nullam vestibulum risus a nisi volutpat molestie. Vestibulum purus quam, tempus nec blandit a, convallis sed purus. Suspendisse potenti. Nulla pulvinar venenatis egestas. Sed in hendrerit eros. Etiam tempor molestie massa in interdum. Donec neque lorem, semper rhoncus metus vitae, tristique pulvinar nisi. Phasellus porta sapien placerat ex varius commodo.
  //-   br
  //-   br
  //-   |  Nunc tempor condimentum quam vitae accumsan. Praesent dictum purus eu lacinia cursus. Nunc tincidunt risus est, eget lobortis lacus luctus id. Mauris semper, neque sit amet rutrum mollis, ante elit iaculis enim, eget interdum lectus arcu vitae neque. Nulla condimentum urna quis pulvinar consectetur. Maecenas elementum augue nec nibh rutrum sollicitudin in sit amet mi. Nullam id lectus eu lorem scelerisque pulvinar at eu sapien. Sed tincidunt a ipsum sed aliquet. Proin erat nulla, molestie quis elit vitae, malesuada feugiat ante. Sed hendrerit risus sem, nec venenatis nunc pharetra eu. Nullam at lorem quis dolor consectetur venenatis sed a justo. Sed mattis, metus sed ultrices dignissim, ligula felis vehicula odio, et posuere nibh orci vitae tellus. Nullam libero augue, ultricies quis feugiat vel, sollicitudin ac dui. Vestibulum mi velit, imperdiet sed ornare sed, consectetur vitae nunc.
  //-   br
  //-   br
  //-   |  Nulla et risus iaculis, euismod lectus sed, egestas quam. Aliquam vestibulum leo finibus tortor feugiat, scelerisque accumsan velit fermentum. Vestibulum efficitur non turpis porta commodo. Cras vitae tincidunt mi. Suspendisse turpis ligula, sagittis vitae condimentum sed, rutrum sit amet lacus. Duis magna magna, rutrum sed efficitur vitae, sollicitudin sit amet lacus. Ut sit amet vehicula enim, eget laoreet mauris. Sed vehicula maximus lectus in iaculis. Morbi rutrum arcu ut magna eleifend, et congue ex vulputate. Cras eleifend hendrerit urna. Suspendisse varius sollicitudin placerat. Fusce ac lacinia ligula, at sollicitudin mauris.v
</template>

<style lang="scss" scoped>
.note {
  padding-top: 100px;
  min-height: 80vh;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__title {
    font-size: 60px;
    font-weight: 400;
    margin-top: 2rem;
  }
  &__img {
    width: 100%;
    height: 450px;
    aspect-ratio: 3;
  }
  &__content {
    margin: 5rem 0;
    font-size: 25px;
  }
} 
</style>