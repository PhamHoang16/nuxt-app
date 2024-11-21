<template>
  <div class="reset-password2222">
    <h2>Reset Password</h2>
    <form @submit.prevent="resetPassword">
      <div class="form-group">
        <label for="current-password">Current Password:</label>
        <input type="password" v-model="currentPassword" required />
      </div>
      <div class="form-group">
        <label for="new-password">New Password:</label>
        <input type="password" v-model="newPassword" required />
      </div>
      <div class="form-group">
        <label for="confirm-password">Confirm New Password:</label>
        <input type="password" v-model="confirmPassword" required />
      </div>
      <button type="submit">Reset Password</button>
    </form>
    <p v-if="message" :class="{'error-message': isError, 'success-message': !isError}">{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      message: '',
      isError: false
    };
  },
  methods: {
    async resetPassword() {
      if (this.newPassword !== this.confirmPassword) {
        this.message = 'New passwords do not match';
        this.isError = true;
        return;
      }

      try {
        const response = await axios.post('https://your-backend-api.com/reset-password', {
          currentPassword: this.currentPassword,
          newPassword: this.newPassword
        });
        this.message = response.data.message;
        this.isError = false;
      } catch (error) {
        this.message = error.response ? error.response.data.message : 'An error occurred';
        this.isError = true;
      }
    }
  }
};
</script>

<style scoped>
.reset-password {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.reset-password h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.reset-password .form-group {
  margin-bottom: 15px;
}

.reset-password label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #555;
}

.reset-password input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.reset-password button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.reset-password button:hover {
  background-color: #0056b3;
}

.reset-password p {
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}

.error-message {
  color: red;
}

.success-message {
  color: green;
}
</style>