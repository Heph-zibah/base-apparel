import { mount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import Base from "../components/Base.vue";

describe("Base apparel design", () => {
  it("that there is an image", () => {
    const wrapper = mount(Base);

    expect(wrapper.find("img").attributes("src")).toBe(
      "/src/assets/images/logo.svg"
    );
  });
  it("submits form with valid email", async () => {
    const wrapper = mount(Base);
    wrapper.vm.email = "test@example.com";

    await wrapper.find("form").trigger("submit.prevent");

    expect(wrapper.emitted().formSubmitted).toBeUndefined();
  });
  it("shows error message for invalid email", async () => {
    const wrapper = mount(Base);
    wrapper.vm.email = "test@example.com";

    // Set an invalid email
    await wrapper.setProps({ email: "invalid-email" });

    // Trigger form submission
    await wrapper.find("form").trigger("submit.prevent");

    // Assert that the error message is displayed
    expect(wrapper.find(".error-message").exists()).toBe(true);
  });
});
