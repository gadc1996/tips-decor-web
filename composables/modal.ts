export const useCloseModal = () => {
  useIsModalVisible().value = false
  useIsSubmiting().value = false
  useIsSubmited().value = false
}

export const useOpenModal = () => {
  useIsModalVisible().value = true
}

