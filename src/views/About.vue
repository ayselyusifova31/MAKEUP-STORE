<template>
  <div class="about">
    <div class="mt-5">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;width:100%;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img src="https://images.unsplash.com/photo-1511923199659-1c16881689de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="About MakeUp Store">
              <b-card-text>
                You can figure out this beauty company as it says it all in the name.
                Super cool skincare products that find their color from natural fruits,
                and are infused with other powerhouses like green tea.<br/>
                Because you deserve the best!
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.about {
  width: 100%;
 min-height: 90vh;
  height:100%;
  background-image: url("../assets/bg5.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-content: center;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 1.12rem;
}
</style>