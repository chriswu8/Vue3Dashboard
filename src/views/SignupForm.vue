<template>
  <div class="app-container">
    <div class="background-gradient"></div>
    <div class="backdrop-container"></div>
    <!--.prevent prevents form f/ reloading-->
    <form @submit.prevent="handleSubmit">
      <label>Email:</label>
      <!-- v-model directive 2-way binds value of an input element to a property in the component's data(), and automatically updates that property when input value changes, and vv-->
      <input type="email" required v-model="email">

      <label>Password:</label>
      <input type="password" required v-model="password">
      <div v-if="passwordError" class="error"> {{ passwordError }} </div>

      <label>Role:</label>
      <select v-model="role">
        <option value="admin">Admin</option>
        <option value="client">Client</option>
        <option value="developer">Developer</option>
      </select>

      <div class="skills" v-if="role === 'developer'">
        <label>Skills: </label> &nbsp; &nbsp;
        <div class="skills-content">
          <div class="skills-input">
            <input type="text" v-model="tempSkill" @keyup.enter="addSkill" @keydown.enter.prevent />
          </div>
          <div class="skills-list">
            <div v-for="skill in skills" :key="skill" class="pill" @click="deleteSkill(skill)">{{ skill }}</div>
          </div>
        </div>
      </div>

      <div class="checkboxAndConditions">
        <div class="terms">
          <input type="checkbox" v-model="terms" required>
          Accept
          <span class="link" @click="downloadTermsAndConditionsPDF">Terms and Conditions</span>
        </div>
      </div>

      <div class="submit">
        <button id="submitButton">Create Account</button>
      </div>
    </form>

    <!-- Round button -->
    <router-link :to="{ name: 'dashboard' }" class="bypass-button" >Bypass</router-link>

    <!-- <div class="bypass-button" @click="navigateToDashboard">
      Bypass
    </div> -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      // email, password & role values are 2-way bound to form input (via v-model)
      email: '',
      password: '',
      role: 'client',
      terms: false,
      tempSkill: '',
      skills: [],
      passwordError: ''
    }
  },
  methods: {
    downloadTermsAndConditionsPDF() {
      const pdfPath = process.env.BASE_URL + 'TermsAndConditions.pdf';
      fetch(pdfPath)
        .then(response => response.blob())
        .then(blob => {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'TermsAndConditions.pdf';
          a.click();
          URL.revokeObjectURL(url);
        })
        .catch(error => {
          console.error('Error downloading PDF:', error);
        });
    },
    addSkill(e) {
      console.log(e);
      console.log(this.tempSkill);
      if (e.key === 'Enter' && this.tempSkill) {
        // prevents skill repeats
        if (!this.skills.includes(this.tempSkill)) {
          this.skills.push(this.tempSkill);
          this.tempSkill = '';
        }
      }
    },
    deleteSkill(skill) {
      // create new skills arary with passed skill removed
      // filter method: keep in array if true, else remove
      this.skills = this.skills.filter((arrayElement) => arrayElement !== skill);
    },
    handleSubmit() {
      // validate password
      this.passwordError = this.password.length > 8 ? '' : 'Password must be at least 8 characters long';
    }
  },
  navigateToDashboard() {
    this.$router.push({ name: 'dashboard' });
  },
}
</script>

<style>
form {
  max-width: 488px;
  max-height: 888px;
  /* auto evenly distributse horizontal space. */
  margin: 88px auto;
  background: white;
  text-align: left;
  padding-top: 68px;
  padding-left: 108px;
  padding-right: 108px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 4px 8px rgba(0, 0, 0, 0.1);
  grid-column: 6 / span 5;
  /* grid-row: 1 / span 10; */
  grid-row: 1 / -1;
}

label {
  color: #888888;
  display: inline-block;
  margin: 18px 0 18px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}

input,
select {
  display: block;
  padding: 8px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #888888;
  color: #888666;
}

input[type="checkbox"] {
  display: inline-block;
  width: 18px;
  margin: 0 10px 0 0;
  position: relative;
  top: 1px;
}

.checkboxAndConditions {
  display: flex;
  justify-content: center;
  margin-top: 28px;
}

.terms {
  text-align: center;
  margin-top: 8;
}

.link {
  color: rgb(88, 188, 288);
  cursor: pointer;
  transition: color 0.5s;
}

.link:hover {
  color: rgb(88, 88, 388);
  text-decoration: underline;
}

.app-container {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
}

.backdrop-container {
  background-image: url("~@/assets/coincc-backdrop.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left center;
  height: 100vh;
  grid-column: 2 / span 4;
  grid-row: 1 / span 10;
}

.background-gradient {
  background-image: linear-gradient(to bottom, rgb(19, 60, 121), rgb(155, 190, 231));
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left center;
  background-color: rgb(168, 226, 226);
  height: 100vh;
  grid-column: 2 / span 4;
  grid-row: 1 / span 10;
}


@media screen and (max-width: 900px) {
  .backdrop-container {
    display: none;
  }

  .background-gradient {
    display: none;
  }

  form {
    max-width: 80%;
    padding: 40px;
    margin: 40px auto;
    grid-column: 3 / span 6;
    grid-row: 1 / span 12;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}


.skills {
  display: flex;
  align-items: flex-start;
  margin-top: 18px;
  margin-bottom: 16px;
}

.skills-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.skills-input {
  margin-bottom: 18px;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
}

.pill {
  background: linear-gradient(to bottom, rgb(19, 60, 121), rgb(155, 190, 231));
  color: white;
  padding: 8px 18px;
  margin: 4px;
  border-radius: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 10px;
  font-size: small;
  display: flex;
  justify-content: center;
  align-items: center;
}

.submit {
  text-align: center;
  margin-top: 28px;
}

.submit button {
  background: linear-gradient(to bottom, rgb(19, 60, 121), rgb(155, 190, 231));
  color: white;
  padding: 11px 18px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s;
}

.submit button:hover {
  transform: translateY(-3px);
}

.error {
  color: red;
  font-size: 10px;
  margin-top: 8px;
  display: flex;
  justify-content: center;
}

/** temporary bypass button's style below */

.bypass-button {
  grid-row: 9;
  grid-column: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-left: 50px;
  margin-top: 20px;
}

.bypass-button:hover {
  background-color: #0b135a;
}

/** temporary bypass button's style above */

body {
  /* disables scrolling */
  overflow: hidden;
}
</style>